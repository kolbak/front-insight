FROM node:13.12.0-alpine AS compile-image

WORKDIR /opt/ng

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./

RUN npm start

FROM nginx:alpine
COPY --from=compile-image /opt/ng/dist/. /usr/share/nginx/html
