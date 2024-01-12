// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

document.addEventListener("load",()=>{
  if (window.scroll>=400) {
    let sec1 = document.getElementById("section");
    sec1.style.opacity = 1;
  }
  if (window.scroll>=1000) {
    let sec2 = document.getElementById("section-2");
    sec2.style.opacity = 1;
  }
  if (window.scroll>=1600) {
    let sec3 = document.getElementById("section-3");
    sec3.style.opacity = 1;
  }
  if (window.scroll>=2200) {
    let sec4 = document.getElementById("section-4");
    sec4.style.opacity = 1;
  }

})

document.addEventListener('scroll',()=>{
  if (window.scrollY>400) {
    let sec1 = document.getElementById("section");
    sec1.style.opacity = 1;
  }
});

document.addEventListener('scroll',()=>{
  if (window.scrollY>1000) {
    let sec2 = document.getElementById("section-2");
    sec2.style.opacity = 1;
  }
});

document.addEventListener('scroll',()=>{
  if (window.scrollY>1600) {
    let sec3 = document.getElementById("section-3");
    sec3.style.opacity = 1;
  }
});

document.addEventListener('scroll',()=>{
  if (window.scrollY>2200) {
    let sec4 = document.getElementById("section-4");
    sec4.style.opacity = 1;
  }
});