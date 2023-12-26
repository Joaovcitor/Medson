const carousel = document.querySelector("#carrossel");

carousel.slides = carousel.querySelectorAll(".slide");

carousel.activeSlide = 0;

carousel.interval = 3000;

carousel.previousSlide = function() {
    this.activeSlide--;
    if (this.activeSlide < 0) {
        this.activeSlide = this.slides.length - 1;
    }
    this.update();
}

carousel.nextSlide = function() {
    this.activeSlide++;
    if (this.activeSlide >= this.slides.length) {
        this.activeSlide = 0;
    }
    this.update();
}

carousel.update = function() {
    this.slides.forEach(function (slide) {
        slide.style.display = "none";
    });
    
    this.slides[this.activeSlide].style.display = "block";
}

carousel.addEventListener("click", function (event) {
    if (event.target.classList.contains("previous-button")) {
        this.previousSlide();
    } else if (event.target.classList.contains("next-button")) {
        this.nextSlide();
    }
});

setInterval(function () {
    carousel.nextSlide();
}, carousel.interval);

carousel.update();


// BOTAO ZAP 

const bnt_zap = document.querySelector(".wps_js_msg")

bnt_zap.addEventListener("click", function(e) {
    let msg = "Olá! Tenho interesse e queria mais informações. por favor."
    let link =
        "https://wa.me/558897043513/?text=" + encodeURIComponent(msg);
      window.open(link);
})
