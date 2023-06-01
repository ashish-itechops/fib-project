FROM node:18 as node
WORKDIR /demo1
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /demo1/dist/fibonacci_series /usr/share/nginx/html