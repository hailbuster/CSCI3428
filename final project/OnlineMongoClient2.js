/*
  Group 7 / Group 17 Authors:
  
  File received from Terence Goldsmith and updated
  
  Jonathan Boyd (A00410716)
  
  
  ======================== OnlineMongoClient2.js ======================================

  Due: end of term, fall 2021
  This javascript submission is Phase IV of Software Engineering.

  We are creating a web-based storybook designed to assist in learning the 
  Mi'kmaq language.  The storybook will contain an initial menu page, three 
  choose-from-3 option pages and a final page that plays the story chosen.  It 
  should integrate pictures, text and audio to immerse the students in an 
  interactive environment. 
  This software will use Java, JavaScript, Html5, CSS3 and react.js. There will
  be audio for the words to be played so that users can correctly speak the 
  words. HTML5 and CSS3 will be used to design the pages with visual inputs 
  such as pictures. JavaScript will be used for page interaction such as words
  and audio.  Nodejs/react.js will be used for server/backend development.

  The purpose of this JavaScript file is to create the functions called by 
  the HTML document "OnlineMongoClient2.html".
  
  == Contents ==
  
    global variables: server URL
      total json page object
      name (collection)
      pagenum (document reference)

    constants:  BLANK - for blank files
                BLANK_TEXT - for blank text
    
    TG - set()
    TG - get()

create() - create a story (collection)
combine() - combine inputs into a json structure in prep for page (document) submission
createPage() - page (document) submission

updates for page fields:
	pageTitleUpdate()
	pageTitleRemove()
	mainStoryPicUpdate()
	mainStoryPicRemove()
	opOnePicUpdate()
	opOnePicRemove()
	opTwoPicUpdate()
	opTwoPicRemove()
	opThreePicUpdate()
	opThreePicRemove()
	mainAudioUpdate()
	mainAudioRemove()
	opOneAudioUpdate()
	opOneAudioRemove()
	opTwoAudioUpdate()
	opTwoAudioRemove()
	opThreeAudioUpdate()
	opThreeAudioRemove()
	mainTextUpdate()
	mainTextRemove()
	opOneTextUpdate()
	opOneTextRemove()
	opTwoTextUpdate()
	opTwoTextRemove()
	opThreeTextUpdate()
	opThreeTextRemove()
	englishHintUpdate()
	englishHintRemove()

fileUpdate() - actual call to update the fields with values from page field buttons
getServerInfo() - function to get a page (document) from the server for future use
    
*/


// Represents ugdev.cs.smu.ca at port 3026.
// Remember to use your birthday day as the port.
// Since my birthday day is on the 26'th of the month,
// I would use the port 3026.
// This is necessary because the whole class shares the ports.
// When two people try to use the same port an error results.
var SERVER_URL = "http://ugdev.cs.smu.ca:3721";

//total variable is the combined json structure of a page
var total;

//story name (collection)
var name = $("#storyname").val();

//pagenumber (document reference)
var pagenum = $("#page").val();

//value for blank files (to be used for display purposes in main story)
const BLANK= "-1";
//value for blank text
const BLANK_TEXT = "";


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



//create a new story (collection)
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
  //                   createCallback is run only after $.post has finished and returned a valid
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

// The callback function called createCallback executed when no errors occur.
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


//combine function combines all the values to insert into a json object in prep
//to send in as a total page (document) submission
function combine(){
  console.log("please work");
  
  name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var pagetitle = $("#pagetitle").val();
  
  var mainStoryPic = $("#mainStoryPic").val().replace('C:\\fakepath\\', '');
  var opOnePic = $("#opOnePic").val().replace('C:\\fakepath\\', '');
  var opTwoPic = $("#opTwoPic").val().replace('C:\\fakepath\\', '');
  var opThreePic = $("#opThreePic").val().replace('C:\\fakepath\\', '');
  var mainAudio = $("#mainAudio").val().replace('C:\\fakepath\\', '');
  var opOneAudio = $("#opOneAudio").val().replace('C:\\fakepath\\', '');
  var opTwoAudio = $("#opTwoAudio").val().replace('C:\\fakepath\\', '');
  var opThreeAudio = $("#opThreeAudio").val().replace('C:\\fakepath\\', '');
  var mainText = $("#mainText").val();
  var opOneText = $("#opOneText").val();
  var opTwoText = $("#opTwoText").val();
  var opThreeText = $("#opThreeText").val();
  var englishHint = $("#englishHint").val();
  
//big page json structure for submission
  total = { storyname: name, page: pagenumber, "pagetitle": pagetitle, "mainstorypic": mainStoryPic, "oponepic": opOnePic, "optwopic": opTwoPic, "opthreepic":opThreePic, "mainaudio": mainAudio, "oponeaudio": opOneAudio, "optwoaudio": opTwoAudio, "opthreeaudio":opThreeAudio, "maintext": mainText, "oponetext": opOneText, "optwotext": opTwoText, "opthreetext":opThreeText, "englishhint":englishHint };
  console.log(total);
  
  //call to submit the page
  createPage();
 
}

//function to actually create the page (document) submission
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
  //                   createPageCallback is run only after $.post has finished and returned a valid
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

// The callback function called createPageCallback executed when no errors occur.
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

//update button functions to create proper json objects to send to fileUpdate() which will send to server

//page title update
function pageTitleUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var pagetitle = $("#pagetitle").val();
  
  var update = {storyname: name, page: pagenumber, "pagetitle": pagetitle};

  fileUpdate(update, "pagetitle", pagetitle);
}

//page title update
function pageTitleRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var pagetitle = "";
  
  var update = {storyname: name, page: pagenumber, "pagetitle": pagetitle};

  fileUpdate(update, "pagetitle", pagetitle);
}

//main story picture update
function mainStoryPicUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var mainStoryPic = $("#mainStoryPic").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "mainstorypic": mainStoryPic};
console.log("This is the storypic file " + mainStoryPic);
  fileUpdate(update, "mainstorypic",mainStoryPic);
}

//main story picture removal
function mainStoryPicRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var mainStoryPic = "BlankRemoved.jpg";
  
  var update = {storyname: name, page: pagenumber, "mainstorypic": mainStoryPic};

  fileUpdate(update, "mainstorypic",mainStoryPic);
}

//option one picture update
function opOnePicUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opOnePic = $("#opOnePic").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "oponepic": opOnePic};

  fileUpdate(update, "oponepic",opOnePic);
}

//option one picture removal
function opOnePicRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opOnePic = BLANK;
  
  var update = {storyname: name, page: pagenumber, "oponepic": opOnePic};

  fileUpdate(update, "oponepic",opOnePic);
}

//option two picture update
function opTwoPicUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opTwoPic = $("#opTwoPic").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "optwopic": opTwoPic};

  fileUpdate(update, "optwopic",opTwoPic);
}

//option two picture removal
function opTwoPicRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opTwoPic = BLANK;
  
  var update = {storyname: name, page: pagenumber, "optwopic": opTwoPic};

  fileUpdate(update, "optwopic",opTwoPic);
}

//option three picture update
function opThreePicUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opThreePic = $("#opThreePic").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "opthreepic": opThreePic};

  fileUpdate(update,"opthreepic",opThreePic);
}

//option three picture removal
function opThreePicRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opThreePic = BLANK;
  
  var update = {storyname: name, page: pagenumber, "opthreepic": opThreePic};

  fileUpdate(update,"opthreepic",opThreePic);
}


//main audio update
function mainAudioUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var mainAudio = $("#mainAudio").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "mainaudio": mainAudio};

  fileUpdate(update, "mainaudio",mainAudio);
}

//main audio removal
function mainAudioRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var mainAudio = BLANK;
  
  var update = {storyname: name, page: pagenumber, "mainaudio": mainAudio};

  fileUpdate(update,"mainaudio",mainAudio);
}


//option one audio update
function opOneAudioUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opOneAudio = $("#opOneAudio").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "oponeaudio": opOneAudio};

  fileUpdate(update, "oponeaudio",opOneAudio);
}

//option one audio removal
function opOneAudioRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opOneAudio = BLANK;
  
  var update = {storyname: name, page: pagenumber, "oponeaudio": opOneAudio};

  fileUpdate(update, "oponeaudio",opOneAudio);
}

//option two audio update
function opTwoAudioUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opTwoAudio = $("#opTwoAudio").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "optwoaudio": opTwoAudio};

  fileUpdate(update, "optwoaudio",opTwoAudio);
}

//option two audio removal
function opTwoAudioRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opTwoAudio = BLANK;
  
  var update = {storyname: name, page: pagenumber, "optwoaudio": opTwoAudio};

  fileUpdate(update, "optwoaudio",opTwoAudio);
}

//option three audio update
function opThreeAudioUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opThreeAudio = $("#opThreeAudio").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "opthreeaudio": opThreeAudio};

  fileUpdate(update,"opthreeaudio",opThreeAudio);
}

//option three audio removal
function opThreeAudioRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opThreeAudio = BLANK;
  
  var update = {storyname: name, page: pagenumber, "opthreeaudio": opThreeAudio};

  fileUpdate(update, "opthreeaudio",opThreeAudio);
}

//main text update
function mainTextUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var mainText = $("#mainText").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "maintext": mainText};

  fileUpdate(update, "maintext",mainText);
}

//main text removal
function mainTextRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  var mainText = BLANK_TEXT;
  
  var update = {storyname: name, page: pagenumber, "maintext": mainText};

  fileUpdate(update, "maintext",mainText);
}

//option one text update
function opOneTextUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opOneText = $("#opOneText").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "oponetext": opOneText};

  fileUpdate(update, "oponetext",opOneText);
}

//option one text removal
function opOneTextRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opOneText = BLANK_TEXT;
  
  var update = {storyname: name, page: pagenumber, "oponetext": opOneText};

  fileUpdate(update, "oponetext",opOneText);
}


//option two text update
function opTwoTextUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opTwoText = $("#opTwoText").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "optwotext": opTwoText};

  fileUpdate(update, "optwotext",opTwoText);
}

//option two text removal
function opTwoTextRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opTwoText = BLANK_TEXT;
  
  var update = {storyname: name, page: pagenumber, "optwotext": opTwoText};

 fileUpdate(update, "optwotext",opTwoText);
}

//option three text update
function opThreeTextUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opThreeText = $("#opThreeText").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "opthreetext": opThreeText};

  fileUpdate(update, "opthreetext",opThreeText);
}

//option three text removal
function opThreeTextRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var opThreeText = BLANK_TEXT;
  
  var update = {storyname: name, page: pagenumber, "opthreetext": opThreeText};

   fileUpdate(update, "opthreetext",opThreeText);
}


//english hint update
function englishHintUpdate()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var englishHint = $("#englishHint").val().replace('C:\\fakepath\\', '');
  
  var update = {storyname: name, page: pagenumber, "englishhint": englishHint};

  fileUpdate(update, "englishhint", englishHint);
}

//english hint removal
function englishHintRemove()
{

name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
   var englishHint = BLANK_TEXT;
  
  var update = {storyname: name, page: pagenumber, "englishhint": englishHint};

  fileUpdate(update, "englishhint",englishHint);
}




//function to update files on server from button json inputs

function fileUpdate(update, title, value){

console.log("this is the name" + update.storyname);
console.log("this is the value " + title);
console.log("this is the value " + value);


//get storyname (collection) and page (document reference)
name = $("#storyname").val();
  pagenum = $("#page").val();
  var pagenumber = parseInt(pagenum);
  
  
  //create total json structure (important to have title and value to be changed!)
  
  total = { storyname: name, page: pagenumber, "title":title, "value": value };
  console.log("this is the oother total " + total);
  console.log(total.storyname + " " + total.page + " " + total.title);
  
 $.post(SERVER_URL + "/doFileUpdate", total, updatePageCallback).fail(
    errorCallback
  );
}

function updatePageCallback(data) {
  console.log('URL ending with "/doFileUpdate" returned ' + data);

if (data == "duplicate page!"){
  alert("ERROR: Duplicate page - page info not saved!");
  }
  else {alert("Page data updated.");}
}

//function to get a page (document) from the server for future use 
function getServerInfo() {
  // define a query string that will return all documents
  var filler2 = {};

  //var page = {"page":pagenum};
  //console.log("this is the page num" + page);
  // jQuery ($) post function
  //
  // First Parameter : The complete URL (not just the root).
  //                   It's important you understand that this URL only exists
  //                   because OnlineMongo2.js is running on the server.
  //                 + storyname (collection) variable
  //                 + pagenum (document reference) variable
  //                   These two variables help to pull the proper document!
  //
  // Second Parameter: The JSON object to be used as the query string.
  //
  // Third Parameter : The callback function.
  //                   The convention is to have it as the last argument 
  //                   in the function call.
  //                   getServerInfoCallback is run only after $.post has 
  //                   finished and returned a valid
  //                   result with no errors having occured.
  //
  // Special Notes   : .fail(errorCallback) is executed when there is an error that occured.
  //                   This is a syntax particular to jQuery used on the client-side,
  //                   that you won't see on the server-side. Errors are handled
  //                   differently on the server-side.
  
  name = $("#storyname").val();
  var storyString = ("/?storyname=" + name);

  pagenum = $("#page").val();
  console.log(pagenum);
  
  var pagenumString = ("&pagenum="+pagenum);
  console.log(pagenumString);
  
  
  //
  $.post(SERVER_URL + "/doGetServerInfo"+storyString+pagenumString, filler2, getServerInfoCallback).fail(errorCallback);
}

// The callback function called getServerInfoCallback executed when no errors occur.
//
// First Parameter : data is the JSON object received from the server.
//                   The special relationship callbacks have with the function
//                   in which they appear as the last argument, enables the
//                   JSON object "data" to be defined and used the way it is.
//
function getServerInfoCallback(data) {
  console.log("URL ending with /doGetServerInfo returned " + data);
  document.getElementById("getServ").innerHTML = data.page;
}
