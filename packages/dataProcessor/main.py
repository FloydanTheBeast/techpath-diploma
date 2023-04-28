#!/usr/bin/env python
from os import getenv
import pika
from pathlib import Path

RABBITMQ_URL = getenv('RABBITMQ_URL')

connection = pika.BlockingConnection(pika.URLParameters(f'{RABBITMQ_URL}?connection_attempts=4&retry_delay=5'))
channel = connection.channel()

def callback(ch, method, properties, body):
  print(" [x] Received %r" % body)

channel.basic_consume(queue='courses_queue',
                      auto_ack=True,
                      on_message_callback=callback)

channel.start_consuming()