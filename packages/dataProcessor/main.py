#!/usr/bin/env python
import pika
from neo4j import GraphDatabase
from os import getenv
from pathlib import Path
import json
import time

RABBITMQ_URL = getenv('RABBITMQ_URL')
COURSES_QUEUE = getenv('COURSES_QUEUE')
DB_URI = getenv('NEO4J_URI')
DB_USER = getenv('NEO4J_USER')
DB_PASSWORD = getenv('NEO4J_PASSWORD')

DB_AUTH = (DB_USER, DB_PASSWORD)

try:
    with GraphDatabase.driver(DB_URI, auth=DB_AUTH) as driver:
        driver.verify_connectivity()

    channel = None

    def on_connected(connection):
        connection.channel(on_open_callback=on_channel_open)

    def on_channel_open(new_channel):
        global channel
        channel = new_channel
        channel.queue_declare(queue=COURSES_QUEUE, durable=False,
                              exclusive=False, auto_delete=False, callback=on_queue_declared)

    def on_queue_declared(frame):
        print(f"Start consuming on queue {COURSES_QUEUE}")
        channel.basic_consume(queue=COURSES_QUEUE,
                              auto_ack=True,
                              on_message_callback=callback)

    def callback(ch, method, properties, body):
        message = json.loads(body)
        print(" [x] Received %r" % message)
        if message['pattern'] == 'unprocessed_course':
            try:
                processCourse(message['data'])
            except Exception as ex:
                print(ex)

    def createCourse(tx, course):
        result = tx.run("""
            MERGE (c:Course {url: $course.url})
            ON CREATE SET c.id = apoc.create.uuid()
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

            FOREACH (lang in $course.languages | 
                MERGE (l:CourseLanguage {countryCodeISO: lang})
                MERGE (c)-[:TRANSLATED_INTO]->(l))
            MERGE (cp:CoursePlatform {name: $course.platform})
            MERGE (c)-[:OWNED_BY_PLATFORM]->(cp)
            """,
                        course=course)
        summary = result.consume()
        return summary

    def processCourse(course):
        # Process the course somehow
        with driver.session(database="neo4j") as session:
            summary = session.execute_write(createCourse, course=course)

        print("Created {nodes_created} nodes in {time} ms.".format(
            nodes_created=summary.counters.nodes_created,
            time=summary.result_available_after
        ))

    params = pika.URLParameters(
        f'{RABBITMQ_URL}?connection_attempts=4&retry_delay=5')
    connection = pika.SelectConnection(params, on_open_callback=on_connected)

    try:
        connection.ioloop.start()
    except KeyboardInterrupt:
        connection.close()
        connection.ioloop.start()
except:
    print('GLOBAL EXCEPTION')
