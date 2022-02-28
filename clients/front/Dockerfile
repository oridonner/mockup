FROM node:14 as build

WORKDIR /var/front
COPY ./clients/front/package.json .
RUN yarn
COPY ./clients/front .
RUN yarn build

FROM nginx:stable-alpine

RUN rm -rf usr/share/nginx/html

COPY --from=build /var/front/build /home/runner/www
COPY ./clients/front/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
