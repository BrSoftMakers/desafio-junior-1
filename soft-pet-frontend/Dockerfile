FROM node:18

WORKDIR /src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD npm run dev

