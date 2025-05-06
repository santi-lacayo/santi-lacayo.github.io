//@sd5056@nyu.edu helped me with this part of the code
document.addEventListener("DOMContentLoaded", function() {
  initPlateRotation();
});

function initPlateRotation() {
  // Get all images for the plate rotation
  var images = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3"),
    document.getElementById("image4"),
    document.getElementById("image5"),
  ];

  // Set initial state - first image visible, others hidden
  let current = 0;
  images[current].classList.add("active");
  images[current].classList.add("spin");

  // Add the toggleImages function to the global scope
  window.toggleImages = function () {
    // Hide and remove spin from current image
    images[current].classList.add("hidden");
    images[current].classList.remove("active");
    images[current].classList.remove("spin");

    // Move to next image in rotation
    current = (current + 1) % images.length;

    // Show and add spin to new current image
    images[current].classList.remove("hidden");
    images[current].classList.add("active");
    images[current].classList.add("spin");
  };
}

//the idea of this slideshow comes from: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


