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
    cost: "500$"
  }, {
    id: 1,
    first_name: "Lindsay",
    breed: "Maltese",
    age: 4,
    cost: "700$"
  }, {
    id: 2,
    first_name: "Tobias",
    breed: "Unknown",
    age: 5,
    cost: "400$"
  }, {
    id: 3,
    first_name: "Byron",
    breed: "Pug",
    age: 7,
    cost: "200$"
  }, {
    id: 4,
    first_name: "George",
    breed: "Unknown",
    age: 3,
    cost: "500$"
  }]
}; // SHOW UP INFO

var pic = document.getElementsByClassName("our-dogs-item");

for (var i = 0; i < pic.length; i++) {
  pic[i].addEventListener("click", showDescription);
}

function showDescription() {
  var innertext = '<p class="our-dogs-item-info">`Hey, my name is: ${first_name}<br>I am ${age} years old<br>My breed is: ${breed}<br>They want for me: ${cost}`</p>';

  if (this.innerHTML.includes(innertext)) {
    this.removeChild(this.lastElementChild);
  } else {
    console.log("niezawiera");
    this.innerHTML += innertext;
  }
} // console.log(description.dog[1].first_name);