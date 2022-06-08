FROM node:16-alpine3.14

RUN mkdir src


COPY components /src/components
COPY pages /src/pages
COPY server-middleware /src/server-middleware
COPY static /src/static
COPY store /src/store
COPY nuxt.config.js /src
COPY package.json /src
COPY tsconfig.json /src


WORKDIR /src

RUN apk update && \
    npm install -g npm \
    npm install && \
    npm install --save nuxt && \
    npm run build