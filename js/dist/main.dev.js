"use strict";

// HIDE / SHOW MENU (burger button)
var burger = document.getElementById("burger");
burger.addEventListener("click", showMenu);

function showMenu() {
  this.style.animation = "fadeInFromNone 0.5s ease-out forwards";
  var burgerMenu = document.getElementById("burgerMenu");
  burgerMenu.style.transform = "translateX(0px)";
  burgerClose.style.animation = "";
}

var burgerClose = document.getElementById("closeMenu");
burgerClose.addEventListener("click", hideMenu);

function hideMenu() {
  this.style.animation = "fadeInFromNone 0.5s ease-out forwards";
  var hideMenu = document.getElementById("burgerMenu");
  hideMenu.style.transform = "translateX(800px)";
  burger.style.animation = "";
}

var menuLinks = document.getElementsByClassName(" nav-burger-menu-list-item");

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", hideMenu);
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
    picture: "1.jpg"
  }, {
    id: 1,
    first_name: "Lindsay",
    breed: "Maltese",
    age: 4,
    cost: "700$",
    picture: "2.jpg"
  }, {
    id: 2,
    first_name: "Tobias",
    breed: "Unknown",
    age: 5,
    cost: "400$",
    picture: "3.jpg"
  }, {
    id: 3,
    first_name: "Byron",
    breed: "Pug",
    age: 7,
    cost: "200$",
    picture: "4.jpg"
  }, {
    id: 4,
    first_name: "Dog",
    breed: "Unknown",
    age: 3,
    cost: "300$",
    picture: "5.jpg"
  }, {
    id: 5,
    first_name: "Pluto",
    breed: "No idea",
    age: 4,
    cost: "500$",
    picture: "6.jpg"
  }, {
    id: 6,
    first_name: "Brad",
    breed: "Unknown",
    age: 5,
    cost: "800$",
    picture: "7.jpg"
  }, {
    id: 7,
    first_name: "Bobby",
    breed: "Unknown",
    age: "0.2",
    cost: "1200$",
    picture: "8.jpg"
  }, {
    id: 8,
    first_name: "Helga",
    breed: "Unknown",
    age: 1,
    cost: "1100$",
    picture: "9.jpg"
  }]
}; // SHOW UP INFO
// ADD PICTURES

var pic = document.getElementById("our-dogs");
description.dog.forEach(function (e) {
  pic.innerHTML += "<div class=\"our-dogs-item\"><img src=\"./dist/img/all/".concat(description.dog[e.id].picture, "\" alt=\"\"> <i class=\"far fa-heart\"></i><p class=\"our-dogs-item-info\">Hey, my name is: ").concat(description.dog[e.id].first_name, "<br>I am ").concat(description.dog[e.id].age, " years old<br>My breed is: ").concat(description.dog[e.id].breed, "<br>They want for me: ").concat(description.dog[e.id].cost, "</p></div>");
}); // Function to load data from LocalStorage (if you like a dog)

var saved = localStorage.getItem("likes");

if (saved) {
  var likes = document.querySelector("#our-dogs");
  likes.innerHTML = saved;
} // SHOW / HIDE PICTURE INFO


var picDesc = document.getElementsByClassName("our-dogs-item");
var heart = document.getElementsByClassName("fa-heart");

for (var _i = 0; _i < picDesc.length; _i++) {
  picDesc[_i].addEventListener("click", showDescription);

  heart[_i].addEventListener("click", love);

  heart[_i].addEventListener("click", yourDogs);
}

function showDescription() {
  if (this.firstChild.style.zIndex === "") {
    this.firstChild.style.zIndex = "0";
  } else if (this.firstChild.style.zIndex === "1") {
    this.firstChild.style.zIndex = "0";
  } else {
    this.firstChild.style.zIndex = "1";
  }
} // Tick heart icon (add to favourites)


function love(e) {
  var likes = document.querySelector("#our-dogs");

  if (this.classList.contains("far")) {
    this.classList.replace("far", "fas");
    e.stopPropagation();
  } else {
    this.classList.replace("fas", "far");
    e.stopPropagation();
  }

  localStorage.setItem("likes", likes.innerHTML);
} //on start, hide dogs Info if was saved in local storage


var hideInfo = document.getElementsByClassName("our-dogs-item");

for (var _i2 = 0; _i2 < hideInfo.length; _i2++) {
  hideInfo[_i2].firstChild.style.zIndex = "1";
} // Create a list of all dogs added to favourites


function yourDogs() {
  var favouriteDogs = localStorage.getItem("likes").split("<div");
  var listOfDogs = "";
  favouriteDogs.forEach(function (e) {
    if (e.indexOf("fas") !== -1) {
      listOfDogs += "<div" + e;
    }
  });
  var printListOfDogs = document.getElementById("yourDogs");
  printListOfDogs.innerHTML = "<h2>Yours favourite dogs:</h2>";
  printListOfDogs.innerHTML += listOfDogs;
  localStorage.setItem("favs", listOfDogs);
} // show favourites after click on button


var buttonFavs = document.querySelector(".showUs");
buttonFavs.addEventListener("click", showIt);
var linkToFavs = document.querySelector(".showDogs");
linkToFavs.addEventListener("click", showIt);
var favsShow = document.getElementById("yourDogs");

function showIt() {
  if (window.getComputedStyle(favsShow).display === "none") {
    favsShow.style.display = "block";
    favsShow.style.animation = "fadeInFromNone 1s ease-out forwards";
    buttonFavs.innerHTML = "Hide my favourite dogs";
  } else {
    favsShow.style.display = "none";
    favsShow.style.animation = "fadeOutToNone 1s ease-out forwards";
    buttonFavs.innerHTML = "Show my favourite dogs";
  }
} // Function to load favourite dogs data from LocalStorage (favourites dogs)


var savedFavs = localStorage.getItem("favs");

if (savedFavs) {
  var favs = document.querySelector("#yourDogs");
  favs.innerHTML = "<h2>Your favourite dogs:</h2>" + savedFavs;
} //Get the button:


mybutton = document.getElementById("myBtn"); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} // When the user clicks on the button, scroll to the top of the document


function topFunction() {
  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} // Hide scroll to top button on the end of the page


var $window = $(window),
    $document = $(document),
    button = $("#myBtn");
button.css({
  opacity: 1
});
$window.on("scroll", function () {
  if ($window.scrollTop() + $window.height() == $document.height()) {
    button.stop(true).animate({
      opacity: 0
    }, 250);
  } else {
    button.stop(true).animate({
      opacity: 1
    }, 250);
  }
});