"use strict";

// HIDE / SHOW MENU (burger button)
var burger = document.getElementById("burger");
burger.addEventListener("click", showMenu);

function showMenu() {
  var burgerMenu = document.getElementById("burgerMenu");
  console.log(burgerMenu.style.color); // if (burgerMenu.style.transform === "translateX(800px)") {

  burgerMenu.style.transform = "translateX(0px)"; // } else {
  //   burgerMenu.style.transform = "translateX(800px)";
  // }
}

var burgerClose = document.getElementById("closeMenu");
burgerClose.addEventListener("click", hideMenu);

function hideMenu() {
  var hideMenu = document.getElementById("burgerMenu");
  console.log(hideMenu.style.color); // if (hideMenu.style.transform === "translateX(800px)") {
  // hideMenu.style.transform = "translateX(0px)";
  // } else {

  hideMenu.style.transform = "translateX(800px)"; // }
}

$(function () {
  $(".autoplay").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});