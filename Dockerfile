FROM node:lts
WORKDIR /app
COPY . .
RUN npm i
COPY . .
CMD ["npm", "run", "start"]