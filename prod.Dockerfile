FROM node:alpine as build
WORKDIR /flight-app

COPY . .

ENV PATH /flight-app/node_modules/.bin:$PATH

RUN yarn

RUN CI=true yarn test

RUN yarn build

FROM nginx:alpine

 
COPY --from=build /flight-app/build /usr/share/nginx/html
 
 # --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
##RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
#COPY nginx/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
EXPOSE 80
# start nginx 
CMD ["nginx", "-g", "daemon off;"]