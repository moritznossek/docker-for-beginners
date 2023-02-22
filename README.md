# Table of Contents
1. [Run local: Application](#run-local-app)
2. [Run local: Database](#run-local-db)
3. [Docker-Compose: MongoDB](#docker-compose)
4. [Build: Container Image](#build)

## <a name="run-local-app">Run local: Application</a>
1. Install dependencies: `npm i`
2. View `package.json`
3. Start server: `npm start`
4. Checkout in browser: `localhost:3000`

## <a name="run-local-db">Run local: Database</a>
### Run MongoDB Container Image
* `docker pull mongo` || `docker pull mongo:4.0`
* `docker run  -it -d mongo:4.0`
### View Database
* `docker pull mongo-express:0.49.0`
### Docker Network
* `docker network ls`
* `docker network create mongo-network`
### MongoDB [port-forwarded, container name, network, env-vars, detached]
* `docker run -p 27017:27017 --rm --name mongodb --net mongo-network -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -d mongo:4.0`
* Check browser: `localhost:27017`
### MongoDB - Express [port-forwarded, container name, network, env-vars, detached]
* `docker run -p 8081:8081 -d -e ME_CONFIG_MONGODB_ADMINUSER=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb --net mongo-network --name mongo-express --rm mongo-express:0.49.0`
* Check browser: `localhost:8081`

## <a name="docker-compose">Docker-Compose: MongoDB</a>
* `docker-compose -f mongo.yaml up -d`
* `docker-compose -f mongo.yaml down`

## <a name="build">Build Docker Image</a>
* `docker build -t my-app:1.0 .`