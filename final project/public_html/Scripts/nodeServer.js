//initiate mongoclient for export
const {Mongoclient} = require("mongodb");

console.log("start of node");
//create main function to connect
async function main(){

console.log("start of main");
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
const uri = "mongodb+srv://SMUAdmin1:CSCI3428@cluster0.y26c2.mongodb.net/newdb?retryWrites=true&w=majority";
//create instance of MongoClienti
const client = new MongoClient(uri);

//try catch for connecting to mongodb and finally block to close connection
try{
	//pauses execution until promise is returned (makes sure we're connected)
	await client.connect();
	console.log("connecting");
	//return list of databases
	await listDatabases(client);
	console.log("awaiting client");

} catch(e){
	//display errors on the console
	console.log("there was an error");
	console.error(e);

} finally{
	//pause execution until promise is returned (closes the connection)
	console.log("closing connection");
	await client.close();

}

//run main and display error if thrown
main().catch(console.error);

}//end main

//create function to retrieve a list of databases in cluster
async function listDatabases(client){
    console.log("onto database list");
    //grab list of databases
    databasesList = await client.db().admin().listDatabases();
    //write them out
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

