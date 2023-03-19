<h1 align="center"><strong>Boilerplate repo for a Fleek interviews</strong></h1>

<br />

## Getting started

#### 1. Clone the repo to your computer

```
git clone <repo-url>
```

#### 2. Go the the repo

```
cd fleek-interview-monorepo
```

## Server

#### 1. Install the server - # Prisma & Graphql (port 4000)

```
cd server
yarn
```

#### 2. migrate the database with `Prisma migrate` run:

More info if needed: [`Prisma Migrate`](https://www.prisma.io/docs/concepts/components/prisma-migrate)

```
npx prisma migrate dev
```

Pick a name for your first migration. Example "init"

```
> npx prisma migrate dev
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "dev.db" at "file:./dev.db"

SQLite database dev.db created at file:./dev.db

✔ Name of migration … init
The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20210227221806_init/
    └─ migration.sql

✔ Generated Prisma Client (2.17.0) to ./node_modules/@prisma/client in 71ms

Everything is now in sync.
```

To reset your database if needed, use Prisma Reset.

More info if needed: [`Prisma Reset`](https://www.prisma.io/docs/concepts/components/prisma-migrate#do-not-edit-or-delete-migrations-that-have-been-applied)

```
npx prisma migrate reset
```

#### 3. Seed your Database

More info if needed: [`Prisma Seed`](https://www.prisma.io/docs/guides/application-lifecycle/seed-database/)

```
npx prisma db seed
```

A new user will be created from server/prisma/seed.ts file.

- login: `admin@joinfleek.com`
- pass: `admin`
- role: `ADMIN`

#### 4. Check you databse with Prisma Studio

More info if needed: [`Prisma Studio`](https://www.prisma.io/docs/concepts/components/prisma-studio)

```
$ npx prisma studio
```

#### 5. Generate the prisma client

Prisma Client is an auto-generated database client that's tailored to your database schema.

More info if needed: [`Prisma Generate`](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client)

```
npx prisma generate
```

#### 6. Start the server (http://localhost:4000)

```
yarn start
```

## Frontend

#### 1. Install the frontEnd - ReactJs (port 3000). In a new terminal run:

```sh
cd react
yarn
```

#### 2. Start the frontend.

```
yarn start
```

#### 3. Go to url: http://localhost:3000

#### 4. Log in to the app with whis Admin User:

- login: `admin@joinfleek.com`
- pass: `admin`
- role: `ADMIN`


## Made with..

Typescript (https://www.typescriptlang.org/) for the Frontend and the Backend

Frontend:

- User interfaces: React https://reactjs.org/
- Design: material-ui-next https://material-ui.com/
- GraphQL tool: Apollo Client https://www.apollographql.com/

Backend:

- Server JS: ExpressJs https://expressjs.com/
- Server GraphQL: https://www.apollographql.com/docs/apollo-server/
- ORM (object-relational mapping): Prisma https://www.prisma.io/
- Database sqlite: https://www.sqlite.org/index.html. You can replace by the database you want (PostgreSQL - MySQL - SQLite - SQL Server). Check the prisma documentation https://www.prisma.io/docs/concepts/

