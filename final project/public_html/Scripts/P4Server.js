/* Group 7 / Group 17 Authors:
  
  Jonathan Boyd (A00410716)
  James W. Isaacs (A00324185)
  Mahesh Khattri (A00432768)
  Ayumu Saito (A00436125)
  Shamatul Jannat Raisa (A00454233)
 
  This JavaScript submission is part of the Phase 3 of Software Engineering.

  Node.js allows the creation of Web servers and networking tools using JavaScript and a 
  collection of "modules" that handle file system I/O, networking (HTTP), and other core functions.
  While Node.js is not a programming language, it allows developers to use JavaScript to write Server-Side scripts

  Within this file are the 'server-side' instructions to the 'back-end' to send the client the JSON objects associated 
  with elements in client side index.html
  
 =========================================== P3Server.js ======================================================================= */

 // import the Express framework into your program
var express = require("express");
var server = express();

var port = 3707;

// Enable recognition of incoming data as JSON
server.use(express.json());

/* Enable incoming values in name:value pairs to be either:
        - string or array (false)
        - any type (true)*/
server.use(express.urlencoded({ extended: true }));

/*  When writing these kinds of server side scripts developers should always allow for all domains to be a source
    Set up allowance characteristics for cross-origin resource sharing (CORS).
    The default is the original domain as the sole source, 
    but CORS allows mutliple domains to be a source in a secure manner.*/

var allowCrossDomain = function (req, res, next) {
  // allows all domains to be a source
  res.header("Access-Control-Allow-Origin", "*");
  // allows control over GET, maybe used with all 4 methods of access (GET, PUT, POST & DELETE)
  // we have excluded everything but GET to avoid data manipulation from outside sources.
  res.header("Access-Control-Allow-Methods", "GET", "POST");
  // only allow headers with "Content-Type" in the JSON name field
 // res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  
  
  // pass control to the next middleware function, else request is left hanging
  next();
};
server.use(allowCrossDomain);
// listen for activity at port 3807
server.listen(port, function () {
  console.log("Example app listening on port 3707");
});




/* This is the route that the JQuery $.get in the Client side JavaScript file will take to retreive the JSON object.

        It is an HTTP GET request (coming from the Client).
                -"/myroute" is the route or path
                - function (request, response) { ... } is a Callback function 
                  that is executed when the client does an http GET operation with 
                  the route (/myroute).

        The server.get() function is always waiting for such an event. 
      
        When you listen for connections on a route in Express, the callback function 
        will be invoked on every network call with a Request object instance and a Response 
        object instance. */

// when the site is visited on port 3807, at the root...     
server.get("/myroute", function (request, response) {

/* This creates a JSON object to be parsed and returned it to the client.
   	var returnObj = {concept: "local stuff", details: "details of stuff"};*/

var returnObj = { stxt1: "Our story begins down by the river. It is a sunny day and I decided to go to the river to do some...",
	txtclear:"",
	txt11:"",
	txt21:"",
	txt31:"",
	btxt11:"ekwitamet",
	btxt21:"Gather Berries",
	btxt31:"ketanteket",
	ttxt1:"Page 1",
	stxt2:"meketa’j nanijik atoqwa’su.  This was enough for my family to have a big feast. Down the river I saw a wounded...",
	txt12:"",
	txt22:"",
	txt32:"",
	btxt12:"muin",
	btxt22:"tia'm",
	btxt32:"kitpu",
	ttxt2:"Page 2",
	stxt3:"I saw that the bear was weak and hungry, so I decided to...",
	txt13:"",
	txt23:"",
	txt33:"",
	btxt13:"give",
	btxt23:"get help",
	btxt33:"leave",
	ttxt3:"Page 3",
	stxt4:"I gave the bear 2 fish, and he began to eat. After eating the fish, the bear"
	+ "	began to walk away. Looking back the bear nodded its head at me, and I was happy." 
	+ " I went home and told my family…",
	txt14:"",
	txt24:"",
	txt34:"",
	btxt14:"the truth",
	btxt24:"told a big tale",
	btxt34:"lied",
	ttxt4:"Page 4",
	pg5ptxt1:"(Replay) Our story begins down by the river. It is a sunny day and I decided to"
	+ " go to the river to do some fishing/gathering/hunting. I caught 5 trout. This was enough"
	+ " for my family to have a big feast. Down the river I saw a wounded Bear/moose/eagle. "
	+"I saw that the bear was weak and hungry, so I decided to Give fish/ give berries/ gives rabbit." 
	+ " I gave the bear 2 fish, and he began to eat. After eating the fish, the bear began to walk away."
	+ " Looking back the bear nodded its head at me, and I was happy. I went home and told my family The truth."
	+ " My family was proud that I helped the wounded bear, but they told me to be careful next time because it "
	+ "may be dangerous to feed wounded animals. I made a new friend that day with the bear and still had enough"
	+ " fish for my family to eat.",
	insulation: "Insulation and Heat Loss<br><br>In North America, thermal "
 +"resistance is measured in R-Values.  The resistance of a material barrier is a "
 +"product of its resistivity, in R/inch, and the inches of thickness.  The actual "
 +"effectiveness of insulation depends on installation and other factors, but this app "
 +"gives drywall an R/inch of 1, fiberglass and celulose insulation an R/inch of 3, "
 +"and urethane spray foam an R/inch of 6.<br><br>In thin and poorly insulating "
 +"assemblies, air films become significant.  This is how painted sheet steel ends up "
 +"with a nominal R of 1.  When assemblies are layered, R values can simply be "
 +"totalled.", 
	materials: "Materials and Insulation<br><br>Heat flow is inversely related to "
 +"thermal resistance.  The conduction of heat through a material is given as a U "
 +"value, which is equal to 1/R.  Add layers into a single R value before finding their "
 +"U value.<br><br>Heat loss is a product of thermal demand and conductive liability.  "
 +"Thermal demand consolidates temperature difference and time, as in degree days.  "
 +"Thermal liability is a product of surface area and conductance.<br><br>Note that "
 +"high R-Value portions of an envelope have a smaller effect on the effective R-value "
 +"than might be supposed.  Conversely, low-R-value portions of an envelope such as "
 +"windows have a larger effect on overall heat loss than their small area may "
 +"suggest.", 
	environmental: "test2"
  };


  // This sets the status to OK (200) and send the appropriate part of the JSON object to the Client webpage 

  return response.status(200).send(returnObj);
});
