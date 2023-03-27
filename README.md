# BIM-IoT-3D GIS Platform

A React app for real-time monitoring of railroad infrastructure.

## Technologies used

- [APS](https://aps.autodesk.com/)
- [ArcGIS Online](https://www.arcgis.com/index.html)
- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)

## FROST-Server

``` shell
# Go to api folder
$ docker-compose up

# Access postgis container using CLI
$ docker exec -ti frost-db-container psql -U sensorthings
```

To access FROST-Server, go to [http://localhost:8080/FROST-Server/](http://localhost:8080/FROST-Server/)
