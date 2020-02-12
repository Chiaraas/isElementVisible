/**
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/
window.addEventListener("scroll", function() { // detect scroll event

  var mySound = document.getElementById("myaudio"); // select audio id
  var lyd = document.getElementById("lyd");
  console.log("Er div #lyd synlig? " + elFllVsbl(lyd)); // test
        
// Below: start and stop audio 
  if (elFllVsbl(lyd)) { // if the #lyd div is visible then
    if (!(mySound.curentTime > 0)) {
      mySound.play(); // play audio
    }
  } else {
    mySound.pause();
    mySound.currentTime = 0; // rewind the sound
  }
})

// this function will check whether a tag is visible
function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
} 



window.addEventListener("scroll", function() { // detect scroll event    

  var mySound = document.getElementById("myaudio2"); // select audio id
  var music = document.getElementById("music");
  console.log("Er div #music synlig? " + elFllVsbl(music)); // test    

// Below: start and stop audio 
  if (elFllVsbl(music)) { // if the #Music div is visible then
    if (!(mySound.curentTime > 0)) {
      mySound.play(); // play audio
    }
  } else {
    mySound.pause();
    mySound.currentTime = 0; // rewind the sound
  }
})

// this function will check whether a tag is visible
function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
} 


window.addEventListener("scroll", function() { // detect scroll event    

  var myVideo = document.getElementById("my see"); // select audio id
  var video = document.getElementById("isee");
  console.log("Er div #music synlig? " + elFllVsbl(isee)); // test    

// Below: start and stop audio 
  if (elFllVsbl(isee)) { // if the #isee div is visible then
    if (!(myVideo.curentTime > 0)) {
      myVideo.play(); // play audio
    }
  } else {
    myVideo.pause();
    myVideo.currentTime = 0; // rewind the sound
  }
})

// this function will check whether a tag is visible
function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}     
    
/*
NB: the audio / video tags will allways return true,
solution: place the tag in a div and test for the div in stead
*/
