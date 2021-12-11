// Represents ugdev.cs.smu.ca at port 3026.
// Remember to use your birthday day as the port.
// Since my birthday day is on the 26'th of the month,
// I would use the port 3026.
// This is necessary because the whole class shares the ports.
// When two people try to use the same port an error results.
//var SERVER_URL = "http://140.184.230.209:3026";
var SERVER_URL = "http://stud.cs.smu.ca:3711";

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
  
$.get(SERVER_URL+"/myroute",function(data){
$("#text1".html(data.txt1));
}).fail(function(error){
	alert(error.responseText);
});

  //$.post(SERVER_URL + "/doInsert", weatherData, insertCallback).fail(
  //  errorCallback
  //);
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
