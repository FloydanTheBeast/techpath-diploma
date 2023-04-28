FROM python:3

WORKDIR /usr/src/app

# Without this setting, Python never prints anything out.
ENV PYTHONUNBUFFERED=1

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./main.py" ]