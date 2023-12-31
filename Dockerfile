# for production mode


## Front End - NextJS

# pulling node.js 20.10.0-alpine
FROM node:20.10.0-alpine 

# Sets the current working directory for subsequent instructions.
WORKDIR /front-end/client

# copying package.json & package-lock.json to WORKDIR
COPY ./client/package*.json ./

# installing required packages
RUN npm install

# copy local files to working directory
COPY ./client ./

# building files
RUN npm run build

EXPOSE 3000

# executing command
CMD [ "npm","start" ]


## Server - NodeJS

# pulling node.js 20.10.0-alpine
FROM node:20.10.0-alpine 

# Sets the current working directory for subsequent instructions.
WORKDIR /back-end/server

# copying package.json & package-lock.json to WORKDIR
COPY ./server/package*.json ./

# installing required packages
RUN npm install

# copy local files to working directory
COPY ./server ./

# building files
RUN npm run build

EXPOSE 5000

# executing command
CMD [ "npm","start" ]