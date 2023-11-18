//-------------------------------------------------------------------------------------------1
let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1");
    if (n > slides1.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides1.length}
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    slides1[slideIndex1-1].style.display = "block";
  }


//-----------------------------------------------------------------------------------------2
  let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    if (n > slides2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    slides2[slideIndex2-1].style.display = "block";
  }


//---------------------------------------------------------------------------------------------------3
let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");
    if (n > slides3.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
    }
    slides3[slideIndex3-1].style.display = "block";
  }


//----------------------------------------------------------------------------------------------4
let slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides4 = document.getElementsByClassName("mySlides4");
    if (n > slides4.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides4.length}
    for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
    }
    slides4[slideIndex4-1].style.display = "block";
  }