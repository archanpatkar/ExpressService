FROM node

WORKDIR /service

ADD package.json /service

RUN npm config set registry https://registry.npmjs.org/

RUN npm install

ADD . /service

EXPOSE 8080

CMD ["npm","start"]