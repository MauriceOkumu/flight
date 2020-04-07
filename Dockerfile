FROM node:13

WORKDIR /flightapp
COPY package*.json ./

RUN yarn cache clean
RUN yarn 

COPY . .
EXPOSE 5000

CMD [ "yarn", "start" ]