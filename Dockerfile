FROM node:13

WORKDIR /flightapp
COPY package*.json ./

ENV NODE_PATH=/node_modules

RUN yarn cache clean
RUN yarn 

COPY . .
