FROM ubuntu:16.04

RUN apt-get update

RUN apt-get install -y \
        python3 \
        python3-dev \
        python3-setuptools \
        python3-pip \
        ruby-sass

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

RUN rm -rf /var/lib/apt/lists/*

RUN mkdir /code
WORKDIR /code

COPY requirements.txt /code/
RUN pip3 install virtualenv

RUN virtualenv /venv
RUN . /venv/bin/activate && pip install -r requirements.txt

COPY package.json /code/
RUN yarn install

COPY . /code/
