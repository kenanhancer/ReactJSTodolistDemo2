FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --silent 

COPY . .
CMD npm start