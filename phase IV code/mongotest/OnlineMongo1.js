var express = require("express"); // Import the Express framework (This is not a library, and not an API.)

var mongodb = require("mongodb"); // Import the MongoDB API (This is not a library, not a framework.)
// This is an API that enables you to use functions from the
// mongoDB library.

var username = "group10"; // username
var password = "chile%40people%4035"; // password (yours should be your A number)
var localHost = "127.0.0.1"; // Just like 140.184.230.209 is the same as ugdev.cs.smu.ca
// 127.0.0.1 is also a host. It is the address of the local host.
// mongoDB must use the local host.
var localPort = "27017"; // port number of the local port
var database = "group10"; // name of database (yours should be the same as your username)

var credentialsString =
  "mongodb://" +
  username +
  ":" +
  password +
  "@" +
  localHost +
  ":" +
  localPort +
  "/" +
  database;

var server = express();

var port = 3526;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/scripts", express.static(__dirname + "/scripts"));
server.use("/css", express.static(__dirname + "/css"));

server.use(express.static(__dirname));

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
server.use(allowCrossDomain);

mongodb.MongoClient.connect(credentialsString, getDBReference);

function getDBReference(err, ref) {
  if (err == null) {
    process.on("SIGTERM", function () {
      console.log("Shutting server down.");
      ref.close();
      server.close();
    });

    server.listen(port, function () {
      console.log("Listening on port " + port);
    });
  } else {
    throw err;
  }
}
