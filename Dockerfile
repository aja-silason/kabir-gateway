FROM node:20-alpine

WORKDIR /app

RUN pnpm install -g @nestjs/cli

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]