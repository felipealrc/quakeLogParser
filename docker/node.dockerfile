FROM node:latest
MAINTAINER Felipe Alarcon
ENV NODE_ENV=development
 
WORKDIR /app
RUN npm install -g nodemon
COPY package*.json ./
RUN npm i \
 && npm cache clean --force \
 && mv /app/node_modules /node_modules
COPY . .
EXPOSE 3000
ENTRYPOINT ["npm", "start"]