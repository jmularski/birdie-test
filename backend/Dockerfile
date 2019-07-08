FROM node:12.2.0-alpine

WORKDIR /backend

COPY package.json /backend/package.json
RUN npm install

COPY . /backend

CMD ["npm", "run", "dev"]
