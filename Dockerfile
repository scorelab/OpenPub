# Setup and build the client

FROM node:9.4.0-alpine as openpub-client

WORKDIR /usr/app/openpub-client/
COPY openpub-client/package*.json ./
RUN npm install -qy
COPY openpub-client/ ./
RUN npm run build


# Setup the server

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY --from=openpub-client /usr/app/openpub-client/build/ ./openpub-client/build/

WORKDIR /usr/app/openpub-server/
COPY openpub-server/package*.json ./
RUN npm install -qy
COPY openpub-server/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]