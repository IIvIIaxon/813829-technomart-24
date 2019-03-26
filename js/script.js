/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (slides && slides.length > 0) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    }
}


var link = document.querySelector(".show-form");
var popap = document.querySelector(".modal-feedback");
if (link && popap) {
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.add("modal-show");
});
}
var close = document.querySelector(".modal-close");
if (close && popap) {
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap.classList.remove("modal-show");
});
}

var link2 = document.querySelector(".show-map");
var popap2 = document.querySelector(".modal-map");
if (link2 && popap2) {
link2.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap2.classList.add("modal-show");
});
}

var close2 = document.querySelector(".modal-close-map");
if (close2) {
close2.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap2.classList.remove("modal-show");
});
}

var close3 = document.querySelector(".modal-close-basket");
if (close3) {
  close3.addEventListener("click", function(evt) {
    evt.preventDefault();
    popap3.classList.remove("modal-show");
});
}

var link4 = document.getElementsByClassName("buy");
var popap3 = document.querySelector(".modal-basket");
if (link4) {
  for (var i = 0; i < link4.length; i++) {
    link4[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    popap3.classList.add("modal-show");
    });
  } 
}


