# Mesium

A React app for real-time monitoring of railways.

## Technologies used

- [Cesium](https://cesium.com/)
- [Forge](https://forge.autodesk.com/)
- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)

## FROST-Server

``` shell
# go to api folder
# Modify email and password / pgAdmin 4
# Run docker-compose
$ docker-compose -f frost-server.yaml up

# Access pgAdmin 4 container http://localhost:9090/
# Add new server 
# Host: frost-db-container
# Username: sensorthings

# Access postgis container using CLI
$ docker exec -ti frost-db-container psql -U sensorthings
```

``` sql
-- Add PostGIS
$ CREATE EXTENSION postgis;

-- Empty Data
$ TRUNCATE "THINGS" RESTART IDENTITY CASCADE;
```

## Forge Dataviz

``` shell
# go to forge folder
yarn
yarn run dev

# view the reference application
http://localhost:9000
```
