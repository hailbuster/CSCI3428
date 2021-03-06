/*
This file demonstrates setting up a connection to a Mongo database, as well as saving and retrieving data. It
employs the MongoDB API functions drop(), insertOne() and findOne().

In MongoDB a set of data is called a collection, and one element from the collection is called a document.

Following the philosophy of the term, which is to get from point A to point B without going into too great
a depth on any of the topics, our approach to saving and retrieving data is as follows:

To save a document, remove the entire collection (in this case weather), and then create a new collection
(weather again) containing one document (the data we want to save).

Since there can only ever be one document in the database, to retrieve the document just get one document from
the database.

Notes:
(1) The Mongo database uses the local port, and the server uses in this case port 3026. You can't miss it below.
It is documented.

(2) The high level order of operations is to first establish the connection to the database on the local port,
and then start listening on port 3026 (or whatever port number you use).

(3) The functions to save and retieve data to/from the database are defined outside the scope of establishing
the connection to the database.

(4) A global variable called "globalDB" is used to contain a reference to the database, that is initialized
within the scope of a function, not visible to the functions used for saving and retrieving data. Use of a
global variable, which is usually frowned upon, is acceptable here because it simplifies the code, and makes
it easier to understand.

(5) I have framed 2 blocks of code below, starting and ending with a long line of stars. It is exactly the same as
what you saw in OnlineMongo1.js, except for the declaration and initialization of the global variable "globalDB"
mentioned in note (4) above. So look out for these 2 sections of code below.

(6) Ignore the DeprecationWarning when you type "node OnlineMongo2"
*/

/* START OF STARRED AREA NO. 1 **** See note (5) in the file header ******************************************** */
/* START OF STARRED AREA NO. 1 **** See note (5) in the file header ******************************************** */
/* START OF STARRED AREA NO. 1 **** See note (5) in the file header ******************************************** */

var express = require("express"); // Import the Express framework (This is not a library, and not an API.)

var mongodb = require("mongodb"); // Import the MongoDB API (This is not a library, not a framework.)
// This is an API that enables you to use functions from the
// mongoDB library.

var username = "terry"; // username
var password = "tgoldsmith20!8pwd"; // password (yours should be your A number)
var localHost = "127.0.0.1"; // Just like 140.184.230.209 is the same as ugdev.cs.smu.ca
// 127.0.0.1 is also a host. It is the address of the local host.
// mongoDB must use the local host.
var localPort = "27017"; // port number of the local port
var database = "terry"; // name of database (yours should be the same as your username)

// create the credentials string used for database connection: mongodb://terry:tgoldsmith20!8pwd@127.0.0.1:27017/terry
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

// Access the express framework via the variable server
var server = express();

// set port variable
var port = 3026;

// ALWAYS HAVE THIS SECTION --- server.use()
//
// enable recognition of incoming data as JSON
server.use(express.json());
// incoming values in name:value pairs can be any type (true below)
server.use(express.urlencoded({ extended: true }));

// ALWAYS HAVE THIS SECTION --- server.use()
//
// static assets like javascript and css are served from these folders
server.use("/scripts", express.static(__dirname + "/scripts"));
server.use("/css", express.static(__dirname + "/css"));
// root
server.use(express.static(__dirname));

// ALWAYS HAVE THIS SECTION --- server.use()
//
// set up allowance characteristics for cross-origin resource sharing (CORS)
// req - not used here
// res - response to HTTP request: allow requesting code from any origin;
//                                 allowed HTTP request methods;
//                                 name of supported request header.
// next - calls the next Express Framework function set to be executed
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
server.use(allowCrossDomain);
/* END OF STARRED AREA NO. 1 **** See note (5) in the file header ********************************************** */
/* END OF STARRED AREA NO. 1 **** See note (5) in the file header ********************************************** */
/* END OF STARRED AREA NO. 1 **** See note (5) in the file header ********************************************** */

// This is one of the two destination URL's for the jquery $.post functions defined in "OnlineMongoClient2.js"
//
// First Parameter : /doInsert completes the URL and identifies the unique
//                   destination so you can have the desired functionality occur
//
// Second Parameter: The callback function.
//                   The convention is to have it as the last argument in the function call.
//                   dropThenInsertCallback is run only after server.post has finished and returned a valid
//                   result with no errors having occured.
//
server.post("/doInsert", dropThenInsertCallback);

// The callback function that is executed when server.post completes its tasks.
// Note that programmer defined error handling is not required here.
//
// First Parameter : req is the request object.
//                   This object contains another object called body which identifies
//                   the JSON object, in much the same way a JavaScript variable would.
//                   see the variable "weatherData" in OnlineMongoClient2.js
//
// Second Parameter: res is the result object.
//
function dropThenInsertCallback(req, res) {
  // This statement deletes the collection called "weather".
  //
  // globalDB              is the reference to the database
  // collection('weather') is a reference to the collection
  // drop()                is the function that performs the deletion
  //                       drop() takes an anonymous callback function as an argument.
  //                       That is "function(dropError, dropSuccess) {...}".
  //                       When drop() is finished its tasks, the anonymous callback function is executed.
  //                           if there was an error, the error object dropError is set.
  //                           if there were no errors, the result parameter dropSuccess is set.
  //
  globalDB.collection("weather").drop(function (dropError, dropSuccess) {
    if (dropSuccess) {
      var weatherData = '{"temperature":"' + req.body.temperature + '"}';

      // This statement inserts the document "weatherData" into the newly created collection "weather"
      //
      // globalDB              is the reference to the database
      // collection('weather') is a reference to the collection. The collection of course does not
      //                       exist at this point, since we dropped it. But insertOne will create it again.
      // insertOne()           inserts the specfied document into the referenced collection.
      //                       Parameter 1: The document to be inserted. You must use JSON.parse for
      //                                    your JSON object "weatherData"
      //                       Parameter 2: The callback function insertCallback
      //                                    When insertOne() is finished its tasks, insertCallback is executed.
      //                                      if an error occurred, then the error object "err" is set.
      //                                    Note that "res" is global to insertCallback, since insertCallback
      //                                    is defined within the scope of dropThenInsertCallback.
      //
      globalDB
        .collection("weather")
        .insertOne(JSON.parse(weatherData), insertCallback);
    } else if (dropError)
      // Throws the error object containing detailed info
      throw dropError;
  });

  // This callback function is executed after insertOne() has completed all its tasks.
  //
  // Parameter 1: If an error occurred, then the error object err is set.
  //
  // Note       : "res" is global to this function which is defined within the scope of dropThenInsertCallback
  //
  function insertCallback(err) {
    if (err == null)
      // This syntax is called chaining.
      // status(200) sets the HTTP status for the response.
      // send("Insert Successful") sends the HTTP response.
      return res.status(200).send("Insert Successful");
    // Throws the error object containing detailed info
    else throw err;
  }
}

// This is one of the two destination URL's for the jquery $.post functions defined in "OnlineMongoClient2.js"
//
// First Parameter : /doGet completes the URL and identifies the unique
//                   destination so you can have the desired functionality occur
//
// Second Parameter: The callback function.
//                   The convention is to have it as the last argument in the function call.
//                   getCallback is run only after server.post has finished and returned a valid
//                   result with no errors having occured.
//
server.post("/doGet", getCallback);

// The callback function that is executed when server.post completes its tasks.
// Note that programmer defined error handling is not required here.
//
// First Parameter : req is not used.
//
// Second Parameter: res is the result object.
//
function getCallback(req, res) {
  // This statement finds the one and only document in the collection called "weather".
  //
  // globalDB              is the reference to the database
  // collection('weather') is a reference to the collection
  // findOne()             is the function that performs the retrieval of the one and only document
  //                       Parameter 1: The query string ({} means everything will match the query,
  //                                    everything in this case, being the one and only document).
  //                       Parameter 2: The callback function.
  //                                    The convention is to have it as the last argument in the function call.
  //                                    findCallback is run only after findOne() has finished all its tasks.
  //                                        if there was an error, the error object err is set.
  //                                        if there were no errors, the result parameter foundRecord is set.
  //                                    Note that "res" is global to findCallback, since findCallback
  //                                    is defined within the scope of getCallback.
  //
  globalDB.collection("weather").findOne({}, findCallback);

  // This callback function is executed after findOne() has completed all its tasks.
  //
  // Parameter 1: If an error occurred, then the error object err is set.
  //
  // Parameter 2: If no errors occurred, then the result object foundRecord is set.
  //
  // Note       : "res" is global to this function which is defined within the scope of getCallback
  //
  function findCallback(err, foundRecord) {
    if (err == null) {
      console.log("FOUND: " + foundRecord.temperature);

      // This syntax is called chaining.
      // status(200) sets the HTTP status for the response.
      // send(foundRecord.temperature) sends the HTTP response.
      return res.status(200).send(foundRecord.temperature);
    }
    // Throws the error object containing detailed info
    else throw err;
  }
}

/* START OF STARRED AREA NO. 2 **** See note (5) in the file header ******************************************** */
/* START OF STARRED AREA NO. 2 **** See note (5) in the file header ******************************************** */
/* START OF STARRED AREA NO. 2 **** See note (5) in the file header ******************************************** */

// Create a connection to your mongoDB database
//
// Parameter 1: database credentials required for logging into and using your mongo database
//              Note: It is a string containing many pieces of information formatted in a specific way.
// Parameter 2: Callback function that returns a reference to the mongo database
//              [Note For The Callback Function: Once mongodb.connect() finishes its tasks, execute getDBReference]
//              (please read the header for this function, to understand the return mechanism)
mongodb.MongoClient.connect(credentialsString, getDBReference);

//
// This function is a callback function executed after a connection to your mongo database
// has been made.
//
// if an error occured while trying to establish a connection to the database, err will reference an error object,
// otherwise err will be null.
// if no error occured, ref will contain a valid reference to your mongo database
//
// This function uses the global system variable "process" which contains info about this Node.js process.
//

// global variable contains reference to the database
var globalDB;

function getDBReference(err, ref) {
  if (err == null) {
    // When a SIGTERM event occurs: log info; close DB; and close server (via the anonymous function).
    // An anonymous function is a function without a name. See the second argument to "process.on"
    // just below. It is "function () {...}"
    // SIGTERM is a signal intentionally generated by another process (not by the operating system).
    // It represents a controlled and deliberate administrative decision, to terminate the process.
    process.on("SIGTERM", function () {
      console.log("Shutting server down.");
      ref.close();
      server.close();
    });

    // initialize reference to the database
    globalDB = ref.db("terry");

    // Start server listening on the port, and log the info (via the anonymous function)
    // An anonymous function is a function without a name. See the second argument to "server.listen"
    // just below. It is "function () {...}"
    server.listen(port, function () {
      console.log("Listening on port " + port);
    });
  } else {
    // Throw the object err containing detailed error info
    throw err;
  }
}

/* END OF STARRED AREA NO. 2 **** See note (5) in the file header ********************************************** */
/* END OF STARRED AREA NO. 2 **** See note (5) in the file header ********************************************** */
/* END OF STARRED AREA NO. 2 **** See note (5) in the file header ********************************************** */
