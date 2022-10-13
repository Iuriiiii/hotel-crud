# syntax=docker/dockerfile:1

FROM node:18.10.0

WORKDIR /usr/src/hotelcrud

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run init
# RUN npm run start