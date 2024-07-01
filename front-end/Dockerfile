# Étape de construction
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install
#RUN npm i @rollup/rollup-linux-arm64-gnu
RUN npm i vite

COPY . .

CMD [ "npm", "run", "dev" ]