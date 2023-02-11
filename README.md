## Inspect Application
1. Install dependencies: `npm i`
2. Show `package.json` and start server: `npm start`

#### Flaw: Data is not persisted

## Get a Database + UI for inspection

* `docker pull mongo`
* `docker pull mongo-express:0.49.0`
* `docker network ls`
* `docker network create mongo-network`
* `docker run -p 27017:27017 --rm --name mongodb --net mongo-network -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo`
* `docker run -p 8081:8081 -d -e ME_CONFIG_MONGODB_ADMINUSER=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb --net mongo-network --name mongo-express --rm mongo-express:0.49.0`

## Use docker-compose for MongoDB
* `docker-compose -f mongo.yaml up -d`
* `docker-compose -f mongo.yaml down`

## Build Docker Image
* `docker build -t my-app:1.0 .`