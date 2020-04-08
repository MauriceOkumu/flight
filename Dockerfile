FROM node:13

WORKDIR /flightapp
COPY package*.json ./

ENV NODE_PATH=/node_modules

RUN yarn cache clean
RUN yarn 

COPY . .
EXPOSE 3000
EXPOSE 35729

CMD [ "yarn", "start" ]