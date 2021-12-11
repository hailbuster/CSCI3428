/*
  Group 7 / Group 17 Authors:
  
  Jonathan Boyd (A00410716)
  James W. Isaacs (A00324185)
  Mahesh Khattri (A00432768)
  Ayumu Saito (A00436125)
  Shamatul Jannat Raisa (A00454233)
  
  
  ======================== index.js ======================================

  Due: end of term, fall 2021
  This HTML submission is Phase 1 of Software Engineering.

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
  the HTML document "index.html".
  
  == Contents ==
  
    global variables: server URL
    getValue function
    englishAlert functions (multiple)
    gotoPage1 function
    pagePull function
    
    
*/

//global variable for the servers URL and the appropriate Port
var SERVER_URL = "http://stud.cs.smu.ca:3807";

//variable to hold which page we're on
var onPage = 100;

//variable to hold txt info
var sTxt;
var txt1;
var txt2;
var txt3;

//more txt for buttons
var btxt1;
var btxt2;
var btxt3;

//txt for title
var ttxt;

//variables for choices
var cp1;
var cp2;
var cp3;
var cp4;


//record of selection for first choice
function getSelect1(){
//1st choice picture [4]
//1st choice audio id = audio1 [5]
//1st choice text id=text1 [6]

if (onPage==100){
  cp1=1;

  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt1.mp3").play()
  
  pagePull();
  //possibly save to local storage right here for file names / choice selection
  
  //sendJSON();
  
  
  //jQuery.ajax({method: "POST", SERVER_URL, data: {image: tester}
  //})
  
  
  }
  else if(onPage==200){
  cp2=1;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page2/p2_opt1.mp3").play()
  pagePull();
  }
  else if (onPage==300){
  cp3=1;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page3/p3_opt1.mp3").play()
  pagePull();
  }
  else if (onPage==400){
  cp4=1;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page4/p4_opt1.mp3").play()
  pagePull();
  } 
}

//record of selection for second choice
function getSelect2(){

// pic 7
// audio 8
// txt 9
if (onPage==100){
  cp1=2;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt2.mp3").play()
  pagePull();
  }
  else if(onPage==200){
  cp2=2;
   new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page2/p2_opt2.mp3").play()
   pagePull();
  }
  else if (onPage==300){
  cp3=2;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page3/p3_opt2.mp3").play()
  pagePull();
  }
  else if (onPage==400){
  cp4=2;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page4/p4_opt2.mp3").play()
  pagePull();
  } 
}

//record of selection for third choice
function getSelect3(){
//pic 10
//audio 11
// txt 12
if (onPage==100){
  cp1=3;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt3.mp3").play()
  pagePull();
  }
  else if(onPage==200){
  cp2=3;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page2/p2_opt3.mp3").play()
  pagePull();
  }
  else if (onPage==300){
  cp3=3;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page3/p3_opt3.mp3").play()
  pagePull();
  }
  else if (onPage==400){
  cp4=3;
  new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page4/p4_opt3.mp3").play()
  pagePull();
  } 
}



function getValue(options) {
  document.getElementById("choiceText").innerHTML =
    "text of their choice: " + options;
    
    //audio options page 1
    if (cp1 == 1){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt1.mp3").play()
    }
    else if (cp1 == 2){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt2.mp3").play()
    }
    else if (cp1 == 3){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt3.mp3").play()
    }
    
    //audio options page 2
    if (options == "Muin (Bear)"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/m/mui'n/recording1.mp3").play()
    }
    else if (options == "Tia m (Moose)"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/t/tia'm/recording1.mp3").play()
    }
    else if (options == "Kitpu (Eagle)"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/g/gitpu/recording1.mp3").play()
    }
    
    //audio options page 3
    if (options == "Give the bear some fish"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/i/ignmuetoq/recording1.mp3").play()
    }
    else if (options == "Go get Help"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/g/getuapetg/recording1.mp3").play()
    }
    else if (options == "Leave it alone"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/m/maja'sit/recording1.mp3").play()
    }
    
    //audio options page 4
    if (options == "The Truth"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/g/gegnuimatl/recording1.mp3").play()
    }
    else if (options == "Told a big Tale"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/n/nujinutmaqaniget/recording1.mp3").play()
    }
    else if (options == "Lied and said bear stole my fish"){
    new Audio("https://www.mikmaqonline.org/words-mp3/media/e/egsuo'qon/recording1.mp3").play()
    }
    
}

//creates alert for hint-button
function englishAlert(){
  
  if (onPage==100){
  alert("Translation in English:\n\
          \n\
          Our story begins down by the river.\n\
          It is a sunny day and I decided to go to the river to do some...");
  }else if (onPage==200){
  alert("Translation in English:\n\
          \n\
          Down the river I saw a wounded...");
  }else if (onPage==300){
  alert("Translation in English:\n\
          \n\
          I saw that the animal was weak and hungry, so I decided to...");
  
  }else if (onPage==400){
  alert("Translation in Enlish: \n\
          \n\
          I went home and told my family...");
  
  }
                                     
                                     
                                     
}

//infline js removed from chap1page1 line 86
function englishAlertPg1(){
  alert("Our story begins down by the river.\n\
                                     It is a sunny day and I decided to go to the river to do some...");
}

//inline js removed from chap1page2 line 87
function englishAlertPg2(){
  alert("Translation in English.\n\
                    I caught 5 trout. \n\
                    This was enough for my family to have a big feast. \n\
                    Down the river I saw a wounded...");
}
//inline js removed from chap1page3 line 86
function englishAlertPg3(){
  alert("Translation in English.\n\
                    I saw that the bear was weak and hungry, so I decided to...");
}

//inline js removed from chap1page4 line 90
function englishAlertPg4(){
  alert("I gave the bear 2 fish, and he began to eat. After eating the fish, the bear began to walk away. Looking back the bear nodded its head at me, and I was happy. I went home and told my family...");
}

//inline js removed from html line 118 & 193
function gotoPage1(){
  window.location.href="Pages/chap1page1.html";
}

//Chapter button activated.
function gotoChapter2(){
  window.location.href="Pages/chap2page1.html";
}
/*format for audio files

let gotoPage1 = () => new Audio("https://www.mikmaqonline.org/words-mp3/media/m/mtesgm/recording1.mp3").play()
*/

//let goFishing = () => new Audio("https://www.mikmaqonline.org/words-mp3/media/n/najiwsget/recording1.mp3").play()

//REVISION - This Function pagePull() pulls the objects for the page from the Server

//function getPic(){

//var img = document.createElement("img");
//img.src = //"http://stud.cs.smu.ca:3817/mem.jpg";

//var src = document.getElementByID("storyPic");
//src.appendChild(img);

//$.get("http://stud.cs.smu.ca:3807/mem.jpg") 
//{
//  $("#storyPic").html(
//}
//}

//controls the next page button function
function changePageForward(){

//if on page 4, go to end page else increment page by 1
  if (onPage == 400){
    onPage=0;
    window.location.href="chap2-end.html";

    }else{
   
      onPage +=100;
      pagePull();
    }
}

//controls the back page button function
function changePageBack(){

//if on page 1, go to index page else decrease page by 1
if (onPage == 100){
onPage = 0;
window.location.href="../index.html";

}else{
onPage -=100;
pagePull();
}
}

function resizeImg(img,height,width){

img.style.height = height;
img.style.width = width;
return img;
}











function pagePull() {

//page number in X00 format
var pageNum = onPage;


//id = story-picture
var sPic;

//if on first page, load first page.  if on next page, load picture selection from prior pages
if (onPage==100){

  sPic=(pageNum + 1);

  //info to get from first page
}else if (onPage==200&&cp1==1){
  sPic=(onPage-100+4);
}else if (onPage==200&&cp1==2){
  sPic=(onPage-100+7);
}else if (onPage==200&&cp1==3){
  sPic=(onPage-100+10);
} //info to get from second page
else if (onPage==300&&cp2==1){
  sPic=(onPage-100+4);
}else if (onPage==300&&cp2==2){
  sPic=(onPage-100+7);
}else if (onPage==300&&cp2==3){
  sPic=(onPage-100+10);
}  //info to get from third page
else if (onPage==400&&cp3==1){
  sPic=(onPage-100+4);
}else if (onPage==400&&cp3==2){
  sPic=(onPage-100+7);
}else if (onPage==400&&cp3==3){
  sPic=(onPage-100+10);

}else{
sPic=(pageNum+1);
}


  






//id = story-container
sTxt = (pageNum + 2);
//id = button-container
var sButt1 = (pageNum + 3);
//id = picture1
var pic1 = (pageNum + 4);
//id = audio1
var aud1 = (pageNum + 5);
//id = text1
txt1 = (pageNum + 6);
//id = picture2
var pic2 = (pageNum + 7);
//id = audio2
var aud2 = (pageNum + 8);
//id = text2
txt2 = (pageNum + 9);
//id = picture3
var pic3 = (pageNum + 10);
//id = audio3
var aud3 = (pageNum + 11);
//id = text3
txt3 = (pageNum + 12);

//id = buttontxt1
btxt1 = (pageNum + 13);
//id = buttontxt2
btxt2 = (pageNum + 14);
//id = buttontxt3
btxt3 = (pageNum + 15);

//id = title
ttxt = (pageNum + 16);




//main pic
var Simg1 = document.createElement("img");
Simg1.src = 
"http://stud.cs.smu.ca/~jl_boyd/Scripts/images/0" + sPic.toString(10) + ".jpg";
//"http://stud.cs.smu.ca:3017/images/Fox.jpg";

//creates variable for story picture
var SimageId1 = document.getElementById("story-picture");
//if it already has a child, remove it and put in next image
if(SimageId1.hasChildNodes()==true){
if (SimageId1.lastElementChild ==null){SimageId1.appendChild(Simg1);}else{
SimageId1.removeChild(SimageId1.lastElementChild);
SimageId1.appendChild(Simg1);
}
}else{
SimageId1.appendChild(Simg1);
}












//1st pic
var img1 = document.createElement("img");


img1.src = 
"http://stud.cs.smu.ca/~jl_boyd/Scripts/images/0" + pic1.toString(10) + ".jpg";
//"http://stud.cs.smu.ca:3017/images/Fox.jpg";

var imageId1 = document.getElementById("picture1");
//imageId1.appendChild(img1);

//if it already has a child, remove it and put in next image
if(imageId1.hasChildNodes()==true){
if (imageId1.lastElementChild ==null){imageId1.appendChild(img1);}else{
imageId1.removeChild(imageId1.lastElementChild);
imageId1.appendChild(img1);
}
}else{
imageId1.appendChild(img1);
}


//2nd pic
var img2 = document.createElement("img");

img2.src = 
"http://stud.cs.smu.ca/~jl_boyd/Scripts/images/0" + pic2.toString(10) + ".jpg";
//"http://stud.cs.smu.ca:3017/images/Fox.jpg";

var imageId2 = document.getElementById("picture2");
//imageId2.appendChild(img2);

//if it already has a child, remove it and put in next image
if(imageId2.hasChildNodes()==true){
if (imageId2.lastElementChild ==null){imageId2.appendChild(img2);}else{
imageId2.removeChild(imageId2.lastElementChild);
imageId2.appendChild(img2);
}
}else{
imageId2.appendChild(img2);
}



//3rd pic
var img3 = document.createElement("img");

img3.src = 
"http://stud.cs.smu.ca/~jl_boyd/Scripts/images/0" + pic3.toString(10) + ".jpg";
//"http://stud.cs.smu.ca:3017/images/Fox.jpg";

var imageId3 = document.getElementById("picture3");
//imageId3.appendChild(img3);

//if it already has a child, remove it and put in next image
if(imageId3.hasChildNodes()==true){
if (imageId3.lastElementChild ==null){imageId3.appendChild(img3);}else{
imageId3.removeChild(imageId3.lastElementChild);
imageId3.appendChild(img3);
}
}else{
imageId3.appendChild(img3);
}



/*4th pic
var img4 = document.createElement("img");

img4.src = 
"http://stud.cs.smu.ca/~jl_boyd/Scripts/images/0" + pic4.toString(10) + ".jpg";
//"http://stud.cs.smu.ca:3017/images/Fox.jpg";

var imageId4 = document.getElementById("tester4");
imageId4.appendChild(img4);
*/


//start of text file stuff


//src.appendChild(img);

  // jQuery http post function
  //
  // First argument : The complete URL (not just the root)
  // Second argument: The callback function ("data" is a reference to the returned JSON object)
  //                  The function is run only after .get() has finished and returned either
  //                  a valid result or an error.
  //
  //                  On error, the .fail() function executes.

  
  $.get(SERVER_URL + "/myroute", function (data) {
  
  
  
  
  //insert text from server for first page
  if (onPage == 100){
  $("#story-container").html(data.stxt1);
  $("#text1").html(data.txt11);
  $("#text2").html(data.txt21);
  $("#text3").html(data.txt31);
  $("#btxt1").html(data.btxt11);
  $("#btxt2").html(data.btxt21);
  $("#btxt3").html(data.btxt31);
  $("#ttxt").html(data.ttxt1);
  
  //fill in choice selection from server
  if(cp1==1){
    $("#choiceText").html(data.btxt11);
  } else if (cp1==2){
    $("#choiceText").html(data.btxt21);
  }else if (cp1==3){
    $("#choiceText").html(data.btxt31);
  }
  
  }
  
  //insert text from server for second page
  if (onPage == 200){
  //clear choiceText field if filled from prior page
  $("#choiceText").html(data.txtclear);
  
  //$("#story-container").html(data.stxt2);
  $("#story-container").html(data.stxt2);
  $("#text1").html(data.txt12);
  $("#text2").html(data.txt22);
  $("#text3").html(data.txt32);
  $("#btxt1").html(data.btxt12);
  $("#btxt2").html(data.btxt22);
  $("#btxt3").html(data.btxt32);
  $("#ttxt").html(data.ttxt2);
//$("#btxt1").html(data.pg5ptxt1);

//fill in choice selection from server
if(cp2==1){
    $("#choiceText").html(data.btxt12);
  } else if (cp2==2){
    $("#choiceText").html(data.btxt22);
  }else if (cp2==3){
    $("#choiceText").html(data.btxt32);
  }
  

  

  }
  
  //insert text from server for third page
  if (onPage == 300){
  
  //clear choiceText field if filled from prior page
  $("#choiceText").html(data.txtclear);
  
  $("#story-container").html(data.stxt3);
  $("#text1").html(data.txt13);
  $("#text2").html(data.txt23);
  $("#text3").html(data.txt33);
  $("#btxt1").html(data.btxt13);
  $("#btxt2").html(data.btxt23);
  $("#btxt3").html(data.btxt33);
  $("#ttxt").html(data.ttxt3);
  
  //fill in choice selection from server
  if(cp3==1){
    $("#choiceText").html(data.btxt13);
  } else if (cp3==2){
    $("#choiceText").html(data.btxt23);
  }else if (cp3==3){
    $("#choiceText").html(data.btxt33);
  }
  }
  
  //insert text from server for fourth page
  if (onPage == 400){
  
  //clear choiceText field if filled from prior page
  $("#choiceText").html(data.txtclear);
  
  $("#story-container").html(data.stxt4);
  $("#text1").html(data.txt14);
  $("#text2").html(data.txt24);
  $("#text3").html(data.txt34);
  $("#btxt1").html(data.btxt14);
  $("#btxt2").html(data.btxt24);
  $("#btxt3").html(data.btxt34);
  $("#ttxt").html(data.ttxt4);
  
  //fill in choice selection from server
  if(cp4==1){
    $("#choiceText").html(data.btxt14);
  } else if (cp4==2){
    $("#choiceText").html(data.btxt24);
  }else if (cp4==3){
    $("#choiceText").html(data.btxt34);
  }
  
  }
  
  
  
  //if (sTxt = 0102){
  //$("#story-container").html(data.stxt1);
  /*}else if(sTxt = 0202){
  $("#story-container").html(data.stxt2);
  }else if(sTxt = 0302){
  $("#story-container").html(data.stxt3);
  }else if(sTxt = 0402){
  $("#story-container").html(data.stxt4);
  }*/
  
  
  
  
  
  //$("#conceptView").html(data.local);

  //else if (choice === "Annual Energy Budget"){
  //$("#conceptView").html(data.annual);
  //}
  //else if (choice === "Drafts and Ventilation"){
  //$("#conceptView").html(data.drafts);
  //}

  
  }).fail(function (error) {
    alert(error.responseText);
  });
}


//function to play with final page and data transfer
function grabIt(){

document.getElementById("final").innerHTML =
    "text of their choice: " + cp1.toString(10);

}


//function to send json to server

/* function sendJSON(){

            let result = document.querySelector('.result');
            let name = document.querySelector('#name');
            let email = document.querySelector('#email');
               
            // Creating a XHR object
            let xhr = new HttpRequest();
            
        
            // open a connection
            xhr.open("POST", SERVER_URL, true);
  
            // Set the request header i.e. which type of content you are sending
            xhr.setRequestHeader("Content-Type", "application/json");
  
            // Create a state change callback
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
  
                    // Print received data from server
                    result.innerHTML = this.responseText;
  
                }
            };
  
            // Converting JSON data to string
            var data = JSON.stringify({ "pg5ptxt1": "test"});
  
            // Sending data with the request
            xhr.send(data);
} */