FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies
RUN npm install 

RUN npm build

COPY . .

EXPOSE 8080

CMD [ "node", "./build/index.js" ]
