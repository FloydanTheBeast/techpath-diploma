#!/usr/bin/env python
import pika
from neo4j import GraphDatabase
from os import getenv
from pathlib import Path
import json
import time
import threading
from transformers import pipeline
import torch

RABBITMQ_URL = getenv('RABBITMQ_URL')
COURSES_QUEUE = getenv('COURSES_QUEUE')
DB_URI = getenv('NEO4J_URI')
DB_USER = getenv('NEO4J_USER')
DB_PASSWORD = getenv('NEO4J_PASSWORD')
CLASSIFICATION_MODEL_PATH = getenv('CLASSIFICATION_MODEL_PATH')

DB_AUTH = (DB_USER, DB_PASSWORD)

THREADS = 4

torch.set_num_threads(1)

with open('./tags.txt', encoding="utf-8") as f:
    candidate_labels = [line.rstrip() for line in f]

print('Initializing classifier...')

classifier = pipeline("zero-shot-classification",
                      model=CLASSIFICATION_MODEL_PATH, num_workers=1)

print('Done initializing classifier...')


class ThreadedConsumer(threading.Thread):
    def __init__(self, id):
        threading.Thread.__init__(self)

        self.id = id

        params = pika.URLParameters(
            f'{RABBITMQ_URL}?connection_attempts=4&retry_delay=5')
        self.connection = pika.BlockingConnection(params)

        self.channel = self.connection.channel()
        self.channel.queue_declare(queue=COURSES_QUEUE, durable=False,
                                   exclusive=False, auto_delete=False)
        self.channel.basic_qos(prefetch_count=1)

        self.driver = GraphDatabase.driver(DB_URI, auth=DB_AUTH)
        self.driver.verify_connectivity()

        threading.Thread(target=self.channel.basic_consume(
            COURSES_QUEUE, on_message_callback=self.onMessage))

    def onMessage(self, channel, method, properties, body):
        message = json.loads(body)

        print(f" [{self.id}] Received message: {message}")
        if message['pattern'] == 'unprocessed_course':
            try:
                self.processCourse(message['data'])
            except Exception as ex:
                print(ex)
                return

        channel.basic_ack(delivery_tag=method.delivery_tag)

    def processCourse(self, course):
        # TODO: Add language recognition

        print(f'[{self.id}] Started classification')
        res = classifier(
            course['title'] + course['description'], candidate_labels, multi_label=True)

        tags = self.classify(res)
        print(f'[{self.id}] Classified tags: {tags}')

        if not len(tags):
            return

        course['tags'] = tags

        # TODO: move database to config
        with self.driver.session(database="neo4j") as session:
            summary = session.execute_write(self.createCourse, course=course)

        print("Created {nodes_created} nodes in {time} ms.".format(
            nodes_created=summary.counters.nodes_created,
            time=summary.result_available_after
        ))

    @staticmethod
    def classify(res):
        return list(filter(lambda x: x[1] >= 0.5, list(
            zip(res['labels'], res['scores']))))[:5]  # Pick maximum of 5 topics

    def createCourse(self, tx, course):
        result = tx.run("""
            MERGE (c:Course {url: $course.url})
            ON CREATE SET c.id = randomUUID()
            ON CREATE SET c.createdAt = datetime.realtime()
            ON MATCH SET c.updatedAt = datetime.realtime()
            SET c.title = $course.title
            SET c.description = $course.description

            WITH *
            CALL apoc.do.when(
                $course.price IS NOT NULL,
                "MERGE (c)-[:HAS_PRICE]->(cPrice:CoursePrice)
                SET cPrice.price = price.price
                SET cPrice.currencyCodeISO = price.currency
                RETURN cPrice",
                "",
                {c:c, price: $course.price})
            YIELD value

            FOREACH (tag in $course.tags |
                MERGE (t:TopicTag {name: tag[0]})
                ON CREATE SET t.id = randomUUID()
                MERGE (c)-[:INCLUDES_TOPIC {score: tag[1]}]->(t)
            )
            FOREACH (lang in $course.languages | 
                MERGE (l:CourseLanguage {countryCodeISO: lang})
                MERGE (c)-[:TRANSLATED_INTO]->(l)
            )
            MERGE (cp:CoursePlatform {name: $course.platform})
            MERGE (c)-[:OWNED_BY_PLATFORM]->(cp)
            """,
                        course=course)
        summary = result.consume()
        return summary

    def run(self):
        print('Starting thread to consume from RabbitMQ...')
        self.channel.start_consuming()

    def stop(self):
        self.channel.stop_consuming()
        self.connection.close()
        self.join()


threads = []


def main():
    for i in range(THREADS):
        print(f'Launch thread #{i}')
        td = ThreadedConsumer(i)
        threads.append(td)
        td.start()


try:
    main()
except KeyboardInterrupt:
    for thread in threads:
        thread.stop()
