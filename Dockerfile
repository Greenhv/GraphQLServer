FROM node:9.2

RUN apt-get update && apt-get -y upgrade
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install apt-transport-https
RUN apt-get update && apt-get -y install yarn

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

CMD [ "npm", "start" ]