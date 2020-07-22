# Quake Log Parser

## Instalando o ambiente

##### Utilizando docker-compose

O projeto foi desenvolvido utilizando o docker-compose, para instalar o ambiente basta descompatar o arquivo e já tendo o docker e o docker-compose instalados na sua maquina basta digitar o código no seu terminal
O projeto foi desenvolvido utilizando o docker-compose, para instalar o ambiente basta descompatar o arquivo e já tendo o docker e o docker-compose instalados na sua maquina basta digitar o código no seu terminal o comando:
>docker-compose build
e o output esperado deve ser: 
```
 Building node1
 Step 1/10 : FROM node:latest
 ---> dcda6cd5e439
 Step 2/10 : MAINTAINER Felipe Alarcon
 ---> Using cache
 ---> f11e6b396eef
 Step 3/10 : ENV NODE_ENV=development
 ---> Using cache
 ---> 8cc007ab947b
 Step 4/10 : WORKDIR /app
 ---> Using cache
 ---> c8022ba38010
 Step 5/10 : RUN npm install -g nodemon
 ---> Using cache
 ---> 11c87235bbd4
 Step 6/10 : COPY package*.json ./
 ---> 0d55f4b22756
 Step 7/10 : RUN npm i  && npm cache clean --force  && mv /app/node_modules /node_modules
 ---> Running in 0ccb2abcb1f8
    
 > nodemon@1.18.4 postinstall /app/node_modules/nodemon
 > node bin/postinstall || exit 0

 Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

 npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/fsevents):
 npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin",> "arch":"any"} (current: {"os":"linux","arch":"x64"})

 added 266 packages from 161 contributors and audited 270 packages in 4.373s
 found 0 vulnerabilities

 npm WARN using --force I sure hope you know what you are doing.
 Removing intermediate container 0ccb2abcb1f8
 ---> 76e4940cceb9
 Step 8/10 : COPY . .
 ---> e941c6533246
 Step 9/10 : EXPOSE 3000
 ---> Running in 8185bec51dac
 Removing intermediate container 8185bec51dac
 ---> 8a85435d4fce
 Step 10/10 : ENTRYPOINT ["npm", "start"]'
 ---> Running in 44d20edc3d07
 Removing intermediate container 44d20edc3d0
 ---> 33300adcda76
 Successfully built 33300adcda76
 Successfully tagged felipealrc/dockerized-node:latest
 ```
