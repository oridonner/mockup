FROM node:14

# take care of internals
WORKDIR /var/app/internals

# === Configs ===
WORKDIR /var/app/server
COPY ./services/tsconfig.base.json .

# === Service ===
WORKDIR /var/app/server/service
COPY ./services/auth/package.json .
RUN yarn
COPY ./services/auth .
RUN yarn build

EXPOSE 5000

CMD [ "node", "./dist/bundle.min.js" ]
