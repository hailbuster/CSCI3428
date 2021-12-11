// db.js

// mongodb driver
const MongoClient = require("mongodb").MongoClient;
const dbConnectionUrl = "mongodb+srv://SMUAdmin1:CSCI3428@cluster0.y26c2.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

var mongojs = new require("mongodb").MongoClient;
global.db = new mongojs("mongodb+srv://SMUAdmin1:CSCI3428@cluster0.y26c2.mongodb.net/?retryWrites=true&w=majority");

var dbName = "sample_airbnb";
var dbCollectionName = " listingsAndReviews";

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};

// << db init >>
db.initialize(dbName, dbCollectionName, function(dbCollection){
    //successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
          console.log(result);
    });

    // << db CRUD routes >>

}, function(err) { // failureCallback
    throw (err);
});
