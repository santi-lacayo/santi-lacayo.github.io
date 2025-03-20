//@sd5056@nyu.edu helped me with this part of the code
function toggleImages() {
    const img1 = document.getElementById("image1");
    const img2 = document.getElementById("image2"); 
    if (img1.classList.contains("hidden")) {
       img1.classList.remove("hidden");
       img1.classList.add("spin");
       img2.classList.add("hidden");
       img2.classList.remove("spin");
    } else {
       img2.classList.remove("hidden");
       img2.classList.add("spin");
       img1.classList.add("hidden");
       img1.classList.remove("spin");
    }
}

//the idea of this slideshow comes from: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}