const { MongoClient } = require('mongodb');


//import expres framework
var express = require("express");

//access the express framework via the variable server
var server = express();

//const http = new Http.Server(server);
//http.setTimeout((4*60*1000)+1);
//app.use(timeout('4m'));

//set port variable
var port = 3711;

//enable recognition of incoming data as JSON
server.use(express.json());

//incoming values in name:value pair can be any type (true)
server.use(express.urlencoded({ extended: true }));

var dirname = "/home/students_tg21f/j_boyd/public_html/public_html";

//static assets like javascript and css ar served from these folders - add in Data folder
server.use("/Scripts", express.static(dirname+"/Scripts"));
server.use("/CSS",express.static(dirname+"/CSS"));
server.use("/Data",express.static(dirname+"/Data"));
//root
//server.use(dirname+"/");

//setup alowance characteristic for cross-origin resource sharing (CORS)
var allowCrossDomain = function (req, res, next){
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
res.header("Access-Control-Allow-Headers","Content-Type");
next();
};
server.use(allowCrossDomain);


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
  
	req.setTimeout((4*60*1000)+1);
	next();
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
  client.db().admin().collection("weather").drop(function (dropError, dropSuccess) {
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
      client.db().admin().collection("weather")
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
  client.db().admin().collection("weather").findOne({}, findCallback);

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


async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://SMUAdmin1:CSCI3428@cluster0.y26c2.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);
	
	//setup server listening
	server.listen(port,function(){
	console.log("Listening on port "+ port+".");
	});

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

server.get("/myroute",function(req, res){

var returnObj = {txt1: "this is working"};
	return response.status(200).send(returnObj);
});

//if (err==null){
//	process.on("SIGTERM",function(){
//	console.log("Shutting server down");
//        client.close();
	
//	};
//start server listening on port
//server.listen(port,function(){
//console.log("Listening on port "+port);
//});{

//}
