<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Author: Kevin Ariel Santamaria Figueroa

## Description

This is a simple demostration of a CRUD in NestJS with Typeorm Postgres.

## 1. Create a Postgres database

```sql
CREATE DATABASE library
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

## 2. Configure the env file with your respective values

src/common/envs/development.env

src/common/envs/.env

Files included in this repository.

Example:
```env
POSTGRESS_DATABASE_HOST=localhost
POSTGRESS_DATABASE_NAME=library
POSTGRESS_DATABASE_USER=postgres
POSTGRESS_DATABASE_PASSWORD=admin123
POSTGRESS_DATABASE_PORT=5432
POSTGRESS_SYNCHRONIZE=true
```

## 3. Installation

```bash
$ npm install
```

## 4. Running the app

```bash
$ npm run start:dev
```

## 5. Import the postman collection

<a href="https://github.com/arielkaizen/book-api/blob/main/Crud.postman_collection.json">Crud.postman_collection.json</a>

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Kevin Ariel Santamaria Figueroa

## License

Nest is [MIT licensed](LICENSE).
