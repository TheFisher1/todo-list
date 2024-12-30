FROM node:22-alpine AS builder
WORKDIR /usr/app

COPY . /usr/app/

RUN npm i

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

FROM nginx:alpine 
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/app/dist .

COPY nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx", "-g", "daemon off;" ]
# FROM node:18.12.1-buster-slim AS builder

# WORKDIR /app
# COPY package.json package-lock.json ./
# COPY public/ public/
# COPY src/ src/
# RUN npm ci
# RUN npm run build

# FROM nginx:stable-alpine
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html
# RUN touch /var/run/nginx.pid
# RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
# USER nginx
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
