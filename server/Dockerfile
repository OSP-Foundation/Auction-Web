# for development mode

# pulling node.js 20.10.0-alpine
FROM node:20.10.0-alpine 

# Sets the current working directory for subsequent instructions.
WORKDIR /back-end

# copying package.json & package-lock.json to WORKDIR
COPY package*.json ./

# installing required packages
RUN npm install

# copy local files to working directory
COPY . ./

EXPOSE 5000

# executing command
CMD [ "npm","run","dev" ]