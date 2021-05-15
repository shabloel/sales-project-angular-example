###Stage 1: Build ###
FROM node:latest AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
RUN npm run build --prod

###Stage 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/sales-project /usr/share/nginx/html