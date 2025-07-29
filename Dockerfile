FROM node:22.16-alpine3.20

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "dev"]

