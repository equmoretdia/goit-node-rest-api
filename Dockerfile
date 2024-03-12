FROM node

WORKDIR /goit-node-rest-api

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["node", "./server.js"]