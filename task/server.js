let express = require('express');
let path = require('path');
let fs = require('fs');
// (1) With MongoClient
// let MongoClient = require('mongodb').MongoClient;
// ---
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get('/profile-picture', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

// (1) With MongoClient
// let mongoUrlLocal = "mongodb://admin:password@localhost:27017";
// let mongoUrlDocker = "mongodb://admin:password@mongodb";
// let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
// let databaseName = "my-db";
// ---

app.post('/update-profile', function (req, res) {
  let userObj = req.body;
  // (1) With MongoClient
  // MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
  //   if (err) throw err;
  //   let db = client.db(databaseName);
  //   userObj['userid'] = 1;
  //   let myquery = { userid: 1 };
  //   let newvalues = { $set: userObj };
  //   db.collection("users").updateOne(myquery, newvalues, {upsert: true}, function(err, res) {
  //     if (err) throw err;
  //     client.close();
  //   });
  // });
 // ---
  res.send(userObj);
});

app.get('/get-profile', function (req, res) {
  let response = {};
  // (1) With MongoClient
  // MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
  //   if (err) throw err;

  //   let db = client.db(databaseName);

  //   let myquery = { userid: 1 };

  //   db.collection("users").findOne(myquery, function (err, result) {
  //     if (err) throw err;
  //     response = result;
  //     client.close();

  //     // Send response
  //     res.send(response ? response : {});
  //   });
  // });
  // ---
  res.send(response ? response : {}); // Comment out
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
