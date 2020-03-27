FROM node:13-alpine

RUN apk add --no-cache tini

WORKDIR /home/container
COPY package.json package-lock.json /home/container/
RUN npm i

COPY . /home/container

ENTRYPOINT ["tini"]
CMD ["yarn", "start"]
