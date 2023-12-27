var slideIndex = 0;

function carouselFinal() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carouselFinal, 1500); // Change image every 2 seconds
}

carouselFinal()


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img_exemplos");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 1500); // Change image every 2 seconds
}

carousel()