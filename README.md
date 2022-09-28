# Mesium

A Nodejs app for real-time monitoring of railways.

## Technologies used

- [React](https://reactjs.org/)
- [Cesium](https://cesium.com/)
- [webpack](https://webpack.js.org/)
- [Node.js](https://nodejs.org/en/)
- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [Docker](https://www.docker.com/)
- [Forge](https://forge.autodesk.com/)

## FROST-Server

``` shell
# go to api folder
$ docker-compose -f .\frost-server.yaml up

# Access the server by opening http://localhost:8080/FROST-Server/

# Access postgis container
$ docker exec -ti frost-db psql -U sensorthings
```
