<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

---

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

---

# Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

---

# Installation

```bash
$ npm install
```

# Running the app

## development
```bash
$ npm run start
```
## watch mode
```bash
$ npm run start:dev
```
## production mode
```bash
$ npm run start:prod
```

# Test

## unit tests
```bash
$ npm run test
```
## e2e tests
```bash
$ npm run test:e2e
```
## test coverage
```bash
$ npm run test:cov
```

# Docker

Para iniciar o projeto com o Docker, você pode executar o seguinte comando:

## Create Database
```bash
$ docker run -d --name postgresql -e POSTGRESQL_PASSWORD=d0ec824ce8b2f652668f3022f7aa7dc7 -e POSTGRESQL_USERNAME=postgres -e POSTGRESQL_DATABASE=virtudev -p 35432:5432 bitnami/postgresql:latest
```

# Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more here.

# Stay in touch
- Author - Kamil Myśliwiec
- Website - https://nestjs.com
- Twitter - @nestframework

# License

Nest is MIT licensed.

## Dotenv
- BASE_URL=http://localhost:3333

- This was inserted by prisma init:
- 
Environment variables declared in this file are automatically made available to Prisma.
See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema
Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
See the documentation for all the connection string options: https://pris.ly/d/connection-strings

- DATABASE_URL="postgresql://postgres:d0ec824ce8b2f652668f3022f7aa7dc7@localhost:35432/virtudev"

-- MAIL_DRIVER=ethereal
-- MAIL_HOST=smtp.example.com
-- MAIL_USER=user@example.com
-- MAIL_PASSWORD=topsecret
-- MAIL_FROM=noreply@example.com
