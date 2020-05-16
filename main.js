// start design the image
// collect my Data
var landingPage = document.querySelector(".cinema");
let myImages = ["download.jpg", "3.jpg", "2.jpg", "images.jpg", "forpa.jpg", "title-bg-about.png"];
// changing background url


setInterval(() => {
    let randomeNumber = Math.floor(Math.random() * myImages.length);

    
landingPage.style.backgroundImage = 'url("assets/'+ myImages[randomeNumber]+'")';
}, 3000);
// end design the image background
var myNavLink = document.querySelectorAll(".nav-item");

// console.log(myNavLink);



// the function of fixed header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("main-navbar").style.padding = "10px 10px";
    document.getElementById("main-navbar").style.top = 0;
    document.getElementById("main-navbar").style.background = " rgba(0,0,0, .9)";
  } else {
  	document.getElementById("main-navbar").style.padding = "50px 10px";
    document.getElementById("main-navbar").style.top = "45px";
    document.getElementById("main-navbar").style.background = " rgba(0,0,0, .8)";
  }
}

// onreload function
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}