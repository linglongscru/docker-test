FROM node:6.3

WORKDIR /deploy

COPY package.json .
RUN npm install --quiet

ADD . .

ARG BUILD=no
RUN if [ "$BUILD" = "yes" ]; then npm run build; fi

RUN groupadd deploy && useradd -g deploy deploy --create-home
USER deploy

EXPOSE 8080
