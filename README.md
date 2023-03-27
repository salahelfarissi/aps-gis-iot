# BIM-IoT-3D GIS Platform

A React app for real-time monitoring of railroad infrastructure.

## Technologies used

- [APS](https://aps.autodesk.com/)
- [ArcGIS Online](https://www.arcgis.com/index.html)
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
