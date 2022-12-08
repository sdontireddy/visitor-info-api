FROM node:19-alpine

RUN mkdir -p /root/.aws
RUN export AWS_SDK_LOAD_CONFIG="true"

COPY .aws root/.aws

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .



RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
