FROM node:latest
MAINTAINER Felipe Alarcon
ENV NODE_ENV=development
 
WORKDIR /app
COPY ./package*.json ./

# Unica para trabalhar com os devDependencies com Docker 
RUN npm install mocha nodemon chai -g
RUN npm install chai -g

RUN npm install nodemon -g
# se produção comentar linhas acima

RUN npm install \
 && npm cache clean --force \
 && mv /app/node_modules /node_modules
COPY . .
EXPOSE 3000
ENTRYPOINT ["npm", "start"]