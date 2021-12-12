// Represents ugdev.cs.smu.ca at port 3026.
// Remember to use your birthday day as the port.
// Since my birthday day is on the 26'th of the month,
// I would use the port 3026.
// This is necessary because the whole class shares the ports.
// When two people try to use the same port an error results.
var SERVER_URL = "http://ugdev.cs.smu.ca:3721";

//total variable is the combined json structure of a page
var total;




function set() {
  // Create JSON object to be saved in the MongoDB database
  var weather = $("#wthr").val();
  var weatherData = { temperature: weather };

  // jQuery ($) post function
  //
  // First Parameter : The complete URL (not just the root).
  //                   It's important you understand that this URL only exists
  //                   because OnlineMongo2.js is running on the server.
  //
  // Second Parameter: The JSON object to be saved in the MongoDB database
  //
  // Third Parameter : The callback function.
  //                   The convention is to have it as the last argument in the function call.
  //                   insertCallback is run only after $.post has finished and returned a valid
  //                   result with no errors having occured.
  //
  // Special Notes   : .fail(errorCallback) is executed when there is an error that occured.
  //                   This is a syntax particular to jQuery used on the client-side,
  //                   that you won't see on the server-side. Errors are handled
  //                   differently on the server-side.
  //
  $.post(SERVER_URL + "/doInsert", weatherData, insertCallback).fail(
    errorCallback
  );
}

// The callback function called insertCallback executed when no errors occur.
//
// First Parameter : data is the JSON object received from the server.
//                   The special relationship callbacks have with the function
//                   in which they appear as the last argument, enables the
//                   JSON object "data" to be defined and used the way it is.
//
function insertCallback(data) {
  console.log('URL ending with "/doInsert" returned ' + data);
  alert("Saved Weather.");
}

// The callback function called errorCallback executed when an error occurs.
//
// First Parameter : err is the object created when there is an error.
//                   It contains fields with information about the error.
//
function errorCallback(err) {
  console.log(err.responseText);
}

function get() {
  // define a query string that will return all documents
  var filler = {};

  // jQuery ($) post function
  //
  // First Parameter : The complete URL (not just the root).
  //                   It's important you understand that this URL only exists
  //                   because OnlineMongo2.js is running on the server.
  //
  // Second Parameter: The JSON object to be used as the query string.
  //
  // Third Parameter : The callback function.
  //                   The convention is to have it as the last argument in the function call.
  //                   getCallback is run only after $.post has finished and returned a valid
  //                   result with no errors having occured.
  //
  // Special Notes   : .fail(errorCallback) is executed when there is an error that occured.
  //                   This is a syntax particular to jQuery used on the client-side,
  //                   that you won't see on the server-side. Errors are handled
  //                   differently on the server-side.
  //
  $.post(SERVER_URL + "/doGet", filler, getCallback).fail(errorCallback);
}

// The callback function called getCallback executed when no errors occur.
//
// First Parameter : data is the JSON object received from the server.
//                   The special relationship callbacks have with the function
//                   in which they appear as the last argument, enables the
//                   JSON object "data" to be defined and used the way it is.
//
function getCallback(data) {
  console.log("URL ending with /doGet returned " + data);
  document.getElementById("out").innerHTML = data;
}


function create() {
  // Create JSON object to be saved in the MongoDB database
  var name = $("#wthr").val();
  console.log("name: ");
  console.log(name);
  var story = { storyname: name, page: 1 };
  console.log("story: ");
  console.log(story);

  // jQuery ($) post function
  //
  // First Parameter : The complete URL (not just the root).
  //                   It's important you understand that this URL only exists
  //                   because OnlineMongo2.js is running on the server.
  //
  // Second Parameter: The JSON object to be saved in the MongoDB database
  //
  // Third Parameter : The callback function.
  //                   The convention is to have it as the last argument in the function call.
  //                   insertCallback is run only after $.post has finished and returned a valid
  //                   result with no errors having occured.
  //
  // Special Notes   : .fail(errorCallback) is executed when there is an error that occured.
  //                   This is a syntax particular to jQuery used on the client-side,
  //                   that you won't see on the server-side. Errors are handled
  //                   differently on the server-side.
  //
  $.post(SERVER_URL + "/doCreate", story, createCallback).fail(
    errorCallback
  );
}

// The callback function called insertCallback executed when no errors occur.
//
// First Parameter : data is the JSON object received from the server.
//                   The special relationship callbacks have with the function
//                   in which they appear as the last argument, enables the
//                   JSON object "data" to be defined and used the way it is.
//
function createCallback(data) {
  console.log('URL ending with "/doCreate" returned ' + data);
  alert("Saved new Story.");
}

// The callback function called errorCallback executed when an error occurs.
//
// First Parameter : err is the object created when there is an error.
//                   It contains fields with information about the error.
//
function errorCallback(err) {
  console.log(err.responseText);
}

function combine(){
  console.log("please work");
  
  var one = $("#stuff").val().replace('C:\\fakepath\\', '');
  var two = $("#stuff2").val().replace('C:\\fakepath\\', '');
  var three = $("#stuff3").val().replace('C:\\fakepath\\', '');
  var name = $("#storyname").val();
  var pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);

  total = { start: one, middle: two, end: three, storyname: name, page: pagenumber};
  console.log(total);
  
  createPage();
  
}

function createPage() {
  // Create JSON object to be saved in the MongoDB database
  //var name = $("#wthr").val();
  //console.log("name: ");
  //console.log(name);
  //var story = { storyname: name, page: 1 };
  //console.log("story: ");
  //console.log(story);
  
  console.log(total);
  console.log("in createPage");

  // jQuery ($) post function
  //
  // First Parameter : The complete URL (not just the root).
  //                   It's important you understand that this URL only exists
  //                   because OnlineMongo2.js is running on the server.
  //
  // Second Parameter: The JSON object to be saved in the MongoDB database
  //
  // Third Parameter : The callback function.
  //                   The convention is to have it as the last argument in the function call.
  //                   insertCallback is run only after $.post has finished and returned a valid
  //                   result with no errors having occured.
  //
  // Special Notes   : .fail(errorCallback) is executed when there is an error that occured.
  //                   This is a syntax particular to jQuery used on the client-side,
  //                   that you won't see on the server-side. Errors are handled
  //                   differently on the server-side.
  //
  $.post(SERVER_URL + "/doPageCreate", total, createPageCallback).fail(
    errorCallback
  );
}

// The callback function called insertCallback executed when no errors occur.
//
// First Parameter : data is the JSON object received from the server.
//                   The special relationship callbacks have with the function
//                   in which they appear as the last argument, enables the
//                   JSON object "data" to be defined and used the way it is.
//
function createPageCallback(data) {
  console.log('URL ending with "/doPageCreate" returned ' + data);

if (data == "duplicate page!"){
  alert("ERROR: Duplicate page - page info not saved!");
  }
  else {alert("Saved Page Information.");}
}
