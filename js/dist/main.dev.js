"use strict";

// HIDE / SHOW MENU (burger button)
var burger = document.getElementById("burger");
burger.addEventListener("click", showMenu);

function showMenu() {
  var burgerMenu = document.getElementById("burgerMenu");
  console.log(burgerMenu.style.color);
  burgerMenu.style.transform = "translateX(0px)";
}

var burgerClose = document.getElementById("closeMenu");
burgerClose.addEventListener("click", hideMenu);

function hideMenu() {
  var hideMenu = document.getElementById("burgerMenu");
  console.log(hideMenu.style.color);
  hideMenu.style.transform = "translateX(800px)";
} // Slider


$(function () {
  $(".autoplay").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
}); // show description for every picture

var description = {
  dog: [{
    id: 1,
    first_name: "Michael",
    breed: "Lawson",
    age: 2
  }, {
    id: 2,
    first_name: "Lindsay",
    breed: "Ferguson",
    age: 4
  }, {
    id: 3,
    first_name: "Tobias",
    breed: "Funke",
    age: 5
  }, {
    id: 4,
    first_name: "Byron",
    breed: "Fields",
    age: 7
  }, {
    id: 5,
    first_name: "George",
    breed: "Edwards",
    age: 3
  }]
};
var pic = document.querySelector(".pic");
pic.addEventListener("click", showDescription);

function showDescription() {
  console.log("dziala");
}