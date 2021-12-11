// photoRotation.js
// takes photos and rotates through the images on main page.

// build array of images
var prefix="../Images/imageschap1/Pic";

var imageArray = new Array(8);
for (i=0; i<imageArray.length; i++)
imageArray[i] = prefix + (1 + i) + ".jpg";

var imgCounter = 0;

function rotate()
{
  var imageObj = document.getElementById('placeholder');
  imageObj.src = imageArray[imgCounter];
  ++imgCounter;
  if (imgCounter == 8) imgCounter = 0;
}

function startRotation()
{
  document.getElementById('placeholder').src=imageArray[0];
  setInterval('rotate()', 4000);
}