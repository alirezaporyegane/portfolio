ARG IMAGE=node:20.15.1-alpine3.20
FROM $IMAGE as buildEnv
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.25.2-alpine-slim
COPY --from=buildEnv /app/dist /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf