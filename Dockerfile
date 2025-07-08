FROM node:alpine
WORKDIR /user/app
RUN npm install
COPY package*.json ./

COPY . .

EXPOSE 3004
CMD ["npm", "start"]