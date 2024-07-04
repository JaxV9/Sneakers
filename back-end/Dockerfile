# pull official base image
FROM python

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

# install dependencies
RUN pip install --upgrade pip
COPY . .
RUN pip install -r requirements.txt


# Change the directory to the subdirectory where manage.py is located
#WORKDIR /usr/src/app/sneakers

# Run the server using manage.py
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
