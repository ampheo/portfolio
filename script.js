const preloader = document.querySelector(".preloader");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
const menu = document.querySelector(".menu");
const btn = document.querySelector("#hambrg");
const toggle = document.querySelector("#toggle-btn");


toggle.addEventListener("click",function(){
  if(btn.classList.contains("active")){
    btn.classList.remove("active");
    menu.classList.add("out");
    menu.style.visibility = "hidden";
    setTimeout(function(){
      menu.classList.remove("out");
    }, 2050);
  }else {
    btn.classList.add("active");
    menu.style.visibility = "visible" ;
    menu.classList.add("animate_content");
    setTimeout(function(){
      menu.classList.remove("animate_content");
    }, 2050);
  }
});

const cursors = document.querySelectorAll("[data-cursor]");

window.addEventListener("mousemove", function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});
function movetoThepage(){

  menu.style.visibility = "hidden";
  btn.classList.remove("active");
  menu.classList.add("out");
  setTimeout(function(){
    menu.classList.remove("out");
  }, 2050);

};
const observ = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
  entry.target.classList.add("show");
  
} else {
  entry.target.classList.remove("show");

}
  });
});
const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observ.observe(el));