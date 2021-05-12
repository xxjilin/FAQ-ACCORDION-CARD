var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("items");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "";  
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar__menu');
    const navLinks = document.querySelectorAll('.navbar__menu--links');
//toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate links
    nav-navLinks.forEach((link, index) => {
       if (link.style.animation) {
           link.style.animation = '';
       } else {
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
       }
    })
    //burger animation
    burger.classList.toggle('toggle');
    });
}

navSlide();
