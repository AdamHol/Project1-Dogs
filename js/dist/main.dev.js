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
}); // DOGS PERSONAL INFO

var description = {
  dog: [{
    id: 0,
    first_name: "Michael",
    breed: "Border Collie",
    age: 2,
    cost: "500$",
    picture: "border-collie-maly.jpg"
  }, {
    id: 1,
    first_name: "Lindsay",
    breed: "Maltese",
    age: 4,
    cost: "700$",
    picture: "brazowy-maly.jpg"
  }, {
    id: 2,
    first_name: "Tobias",
    breed: "Unknown",
    age: 5,
    cost: "400$",
    picture: "piekny-maly.jpg"
  }, {
    id: 3,
    first_name: "Byron",
    breed: "Pug",
    age: 7,
    cost: "200$",
    picture: "pug-maly.jpg"
  }, {
    id: 4,
    first_name: "George",
    breed: "Unknown",
    age: 3,
    cost: "500$",
    picture: "szary-maly.jpg"
  }]
}; // SHOW UP INFO
// ADD PICTURES

var pic = document.getElementById("our-dogs");
description.dog.forEach(function (e) {
  pic.innerHTML += "<div class=\"our-dogs-item\"><img src=\"./dist/img/slider/".concat(description.dog[e.id].picture, "\" alt=\"\"> <i class=\"far fa-heart\"></i><p class=\"our-dogs-item-info\">Hey, my name is: ").concat(description.dog[e.id].first_name, "<br>I am ").concat(description.dog[e.id].age, " years old<br>My breed is: ").concat(description.dog[e.id].breed, "<br>They want for me: ").concat(description.dog[e.id].cost, "</p></div>");
}); // SHOW / HIDE PICTURE INFO

var picDesc = document.getElementsByClassName("our-dogs-item");

for (var i = 0; i < picDesc.length; i++) {
  picDesc[i].addEventListener("click", showDescription);
}

function showDescription() {
  if (this.firstChild.style.zIndex === "") {
    this.firstChild.style.zIndex = "0";
  } else if (this.firstChild.style.zIndex === "1") {
    this.firstChild.style.zIndex = "0";
  } else {
    this.firstChild.style.zIndex = "1";
  }
}