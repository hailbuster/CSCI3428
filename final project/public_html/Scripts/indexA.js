/*
  Group 7 / Group 17 Authors:
  
  Jonathan Boyd (A00410716)
  James W. Isaacs (A00324185)
  Mahesh Khattri (A00432768)
  Ayumu Saito (A00436125)
  Shamatul Jannat Raisa (A00454233)
  
  
  ======================== prototype.html ======================================

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

    getValue function
    englishAlert functions (multiple)
    gotoPage1 function
    
    
    
*/

function getValue(options) {
  document.getElementById("choiceText").innerHTML =
    "text of their choice: " + options;
    
    //audio options page 1
    if (options == "Fishing"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt1.mp3").play()
    }
    else if (options == "Gathering"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt2.mp3").play()
    }
    else if (options == "Hunting"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page1/p1_opt3.mp3").play()
    }
    
    //audio options page 2
    if (options == "Muin (Bear)"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page2/p2_opt1.mp3").play()
    }
    else if (options == "Tia m (Moose)"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page2/p2_opt2.mp3").play()
    }
    else if (options == "Kitpu (Eagle)"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page2/p2_opt3.mp3").play()
    }
    
    //audio options page 3
    if (options == "Give the bear some fish"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page3/p3_opt1.mp3").play()
    }
    else if (options == "Go get Help"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page3/p3_opt2.mp3").play()
    }
    else if (options == "Leave it alone"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page3/p3_opt3.mp3").play()
    }
    
    //audio options page 4
    if (options == "The Truth"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page4/p4_opt1.mp3").play()
    }
    else if (options == "Told a big Tale"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page4/p4_opt2.mp3").play()
    }
    else if (options == "Lied and said bear stole my fish"){
    new Audio("https://ugdev.cs.smu.ca/~group17/Audio_MP3/Chapter1/page4/p4_opt3.mp3").play()
    }
    
}

//inline js removed from html line 89
function englishAlert(){
  alert("English Translation");
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

/*format for audio files

let gotoPage1 = () => new Audio("https://www.mikmaqonline.org/words-mp3/media/m/mtesgm/recording1.mp3").play()
*/

//let goFishing = () => new Audio("https://www.mikmaqonline.org/words-mp3/media/n/najiwsget/recording1.mp3").play()

