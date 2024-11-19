FROM node:18-alpine
WORKDIR /nodejs and express.js server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
