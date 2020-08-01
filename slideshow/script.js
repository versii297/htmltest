var i = 0;
var images = [];
var time = 1000;
  
images[0] = 'images/beverages.jpg';
images[1] = 'images/chinese.jpg';
images[2] = 'images/italian.jpg';
images[3] = 'images/mexican.jpg';


function slides() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
}

setTimeout('slides()', time);
}

window.onload = slides;