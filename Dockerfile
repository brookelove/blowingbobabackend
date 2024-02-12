# specifies the base image
FROM node:21.6.1
WORKDIR /app
COPY package.json ./
RUN npm install


COPY . .
EXPOSE 3000

# Seed the database
RUN node utils/seed/seed.js

# Command to start the server
CMD ["npm","run","start"]

