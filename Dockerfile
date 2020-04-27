# Build image
FROM node:12.16.2-alpine3.10 AS build

WORKDIR /usr/src/app

# install dependencies
COPY package.json .
RUN npm i && npm i -g typescript@3.8.3

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY src src
COPY tsconfig.json .
RUN npm run build

# Final image
FROM node:12.16.2-alpine3.10
WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=8000
ENV PORT $PORT
EXPOSE $PORT

COPY --from=build /usr/src/app/dist dist
COPY --from=build /usr/src/app/node_modules node_modules
COPY --from=build /usr/src/app/package*.json ./

CMD ["npm", "start"]
