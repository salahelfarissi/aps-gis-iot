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

## To start using Mesium API

``` shell
yarn global add nodemon
```

## Database
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