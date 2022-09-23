# Mesium

A Nodejs app for real-time monitoring of railways.

## Technologies used

- [React](https://reactjs.org/)
- [Cesium](https://cesium.com/)
- [webpack](https://webpack.js.org/)
- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [Docker](https://www.docker.com/)

## API

### Nodemon

``` shell
yarn global add nodemon
```

### Database

Create your database.

``` sql
CREATE DATABASE iot;
```

Install required tables

``` shell
# go to sql folder
$ cd packages/sql/

# Inject queries
$ psql -f index.sql
```

### FROST-Server

``` shell
# go to api folder
$ docker-compose -f .\frost-server.yaml up

# Access the server by opening http://localhost:8080/FROST-Server/
```
