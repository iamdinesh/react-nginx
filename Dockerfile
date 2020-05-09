FROM node:12.16.2-slim as build-stage

WORKDIR /app

ARG BACKEND_URL

ENV REACT_APP_BACKEND_URL ${BACKEND_URL}

COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run lint && npm run build

FROM nginx:stable-alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# create logs folder for nginx
RUN mkdir -p /var/log/app
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf