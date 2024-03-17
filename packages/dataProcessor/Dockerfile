FROM python:3.11.6-slim-bullseye

WORKDIR /usr/src/dataProcessor

# Without this setting, Python never prints anything out.
ENV PYTHONUNBUFFERED=1

RUN pip install --upgrade pip

# Install C++ compiler
RUN apt-get update
RUN apt-get install build-essential -y

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./main.py" ]