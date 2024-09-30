var typed = new Typed(".input", {
  strings: ["Frontend Developer", "UI Designer", "Web Developer", "Professionalist"],
  typedSpeed: 90,
  backSpeed: 90,
  loop: true
});


let prevScrollPos = window.scrollY;
const navbar = document.getElementById('nav');


window.onscroll = function() {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};


function togglenav() {
  var nav = document.getElementById("navigation");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}