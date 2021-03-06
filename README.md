# Simple-REST-API-Node-Express-MySQL

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Restful API" width='700' src="https://raw.githubusercontent.com/arul29/Simple-REST-API-Node-Express-MySQL/master/img/ExpressMySQL.jpg">
  </a>
</p>

## Table Of Contents

- [Table Of Content](#table-of-content)
- [Build Setup](#build-setup)
- [Stacks](#stacks)
- [Dependencies](#dependencies)
- [Aplication Structure](#aplication-Structure)
- [API Docs](#api-docs)

## Build Setup

<h3>Install depedencies</h3>

```bash
# with npm
$ npm install
```

<h3>Setup your environment variable (&nbsp <i>.env</i>&nbsp ).</h3>

```env
DB_HOST      = 'yourDBhost'
DB_USER      = 'yourDBuser'
DB_PASSWORD  = 'yourDBpass'
DB_DATABASE  = 'yourDBname'
```

<h3>Start API server</h3>

```bash
$ npm start
```

## Stacks

- NodeJS
- MySQL
- ExpressJS

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests
- [morgan](https://www.npmjs.com/package/morgan) - a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
- [dotenv](https://www.npmjs.com/package/dotenv) - is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [mysql](https://www.npmjs.com/package/mysql) - NodeJs driver for MySQL
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
- [nodemon](https://www.npmjs.com/package/nodemon) - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Aplication Structure

- `app.js` - Entry point of our aplication
- `src/Config` - This folder contain configuration files of our app, such as mysql connection
- `src/Models` - This folder containt files that define query of MysQL
- `src/Routes` - Route of our app going here
- `src/Helpers` - This folder contain file that help you simplify your code such as define the error handling
- `src/Controllers` - This folder contain configuration files that links Models to Route

---

## API Docs

| Method | Endpoint           | Description         | Request Param | Request Body                                                                                              | Request Query            |
| ------ | ------------------ | ------------------- | ------------- | --------------------------------------------------------------------------------------------------------- | ------------------------ |
| GET    | /book              | Show All Book       | -             | -                                                                                                         | -                        |
| GET    | /book/filterstatus | Show Book by Status | -             | -                                                                                                         | status:STRING (Required) |
| GET    | /book/filtergenre  | Show Book by Genre  | -             | -                                                                                                         | genre:STRING (Required)  |
| POST   | /book/addbook      | Add New Book        | -             | `title`:STRING (Required) `author`:STRING (Required) `status`:STRING (Required) `genre`:STRING (Required) | -                        |
| PUT    | /book/updatebook   | Update Book by Id   | -             | `title`:STRING (Required) `author`:STRING (Required) `status`:STRING (Required) `genre`:STRING (Required) | id:NUMBER (Required)     |
| DELETE | /book/deletebook   | Delete Book by Id   | -             | -                                                                                                         | id:NUMBER (Required)     |

---

Copyright © 2019 by Andi Mashdarul Khair
