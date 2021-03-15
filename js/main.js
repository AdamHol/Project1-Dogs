// "use strict";

// HIDE / SHOW MENU (burger button)

const burger = document.getElementById("burger");
burger.addEventListener("click", showMenu);

function showMenu() {
  this.style.animation = "fadeInFromNone 0.5s ease-out forwards";
  const burgerMenu = document.getElementById("burgerMenu");
  burgerMenu.style.transform = "translateX(-800px)";
  burgerClose.style.animation = "";
}

const burgerClose = document.getElementById("closeMenu");
burgerClose.addEventListener("click", hideMenu);

function hideMenu() {
  this.style.animation = "fadeInFromNone 0.5s ease-out forwards";
  const hideMenu = document.getElementById("burgerMenu");
  hideMenu.style.transform = "translateX(0px)";
  burger.style.animation = "";
}

// Hide menu after choose if width < 760px

const mediaQuery = window.matchMedia("(min-width: 768px");
const mediaQueryRemover = window.matchMedia("(max-width: 767px");
const menuLinks = document.getElementsByClassName(" nav-burger-menu-list-item");

function handleMenu(e) {
  if (e.matches) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].removeEventListener("click", hideMenu, false);
    }
  }
}

function handleMenuTwo(e) {
  if (e.matches) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("click", hideMenu);
    }
  }
}

mediaQuery.addListener(handleMenu);

mediaQueryRemover.addListener(handleMenuTwo);

handleMenu(mediaQuery);
handleMenu(mediaQueryRemover);

// Slider

$(function () {
  $(".autoplay").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
  });
});

// DOGS PERSONAL INFO

const description = {
  dog: [
    {
      id: 0,
      first_name: "Michael",
      breed: "Border Collie",
      age: 2,
      cost: "500$",
      picture: "1.jpg",
    },
    {
      id: 1,
      first_name: "Lindsay",
      breed: "Maltese",
      age: 4,
      cost: "700$",
      picture: "2.jpg",
    },
    {
      id: 2,
      first_name: "Tobias",
      breed: "Unknown",
      age: 5,
      cost: "400$",
      picture: "3.jpg",
    },
    {
      id: 3,
      first_name: "Byron",
      breed: "Pug",
      age: 7,
      cost: "200$",
      picture: "4.jpg",
    },
    {
      id: 4,
      first_name: "Dog",
      breed: "Unknown",
      age: 3,
      cost: "300$",
      picture: "5.jpg",
    },
    {
      id: 5,
      first_name: "Pluto",
      breed: "No idea",
      age: 4,
      cost: "500$",
      picture: "6.jpg",
    },
    {
      id: 6,
      first_name: "Brad",
      breed: "Unknown",
      age: 5,
      cost: "800$",
      picture: "7.jpg",
    },
    {
      id: 7,
      first_name: "Bobby",
      breed: "Unknown",
      age: "0.2",
      cost: "1200$",
      picture: "8.jpg",
    },
    {
      id: 8,
      first_name: "Helga",
      breed: "Unknown",
      age: 1,
      cost: "1100$",
      picture: "9.jpg",
    },
  ],
};
let favDogs = [];

function generateHtml(elements, target) {
  elements.forEach((element) => {
    document.getElementById(
      target
    ).innerHTML += `‎<div class="our-elements-item"><img src="./img/all/${element.picture}" alt="">
      <i class="far toggle-fav-heart fa-heart" attr-fav="${element.id}"></i>
      <div class="our-elements-item-info"><p>Hey, my name: ${element.first_name}<br>
      I am ${element.age} years old<br>My breed is: ${element.breed}<br>
      They want for me: ${element.cost}</p></div></div>`;
  });
}

generateHtml(description.dog, "our-dogs");

if (localStorage.getItem("fav-dogs")) {
  favDogs = JSON.parse(localStorage.getItem("fav-dogs"));
  generateHtml(favDogs, "fav-dogs");
}

document.querySelectorAll(".dogs-list").forEach(function (dogsList) {
  dogsList.addEventListener("click", function (el) {
    if (hasClass(el.target, "our-elements-item-info")) {
      el.target.classList.toggle("active");
    }

    if (hasClass(el.target, "toggle-fav-heart")) {
      el.target.classList.toggle("fas");
      let favDogId = el.target.getAttribute("attr-fav");
      let index = favDogs.findIndex((x) => x.id == favDogId);
      if (index == -1) {
        favDogs.push(description.dog.find((x) => x.id == favDogId));
      } else {
        favDogs.splice(index, 1);
      }
      document.getElementById("fav-dogs").innerHTML = "";
      generateHtml(favDogs, "fav-dogs");
      localStorage.setItem("fav-dogs", JSON.stringify(favDogs));
    }

    if (hasClass(el.target, "our-elements-item-info")) {
      console.log("toggleInfo");
    }
  });
});

// Function to load data from LocalStorage (if you like a dog)

const saved = localStorage.getItem("likes");
if (saved) {
  const likes = document.querySelector("#our-dogs");
  likes.innerHTML = saved;
}

function hasClass(element, className) {
  return element.className.split(" ").indexOf(className) > -1;
}

// SHOW / HIDE PICTURE INFO
document.addEventListener("DOMContentLoaded", function () {
  let picDesc = document.getElementsByClassName("our-dogs-item");
  let heart = document.getElementsByClassName("fa-heart");

  for (let i = 0; i < picDesc.length; i++) {
    picDesc[i].addEventListener("click", showDescription);
    heart[i].addEventListener("click", function (el) {
      yourDogs;
      love(el);
    });
  }
});

function showDescription() {
  if (this.firstChild.style.zIndex === "") {
    this.firstChild.style.zIndex = "0";
  } else if (this.firstChild.style.zIndex === "1") {
    this.firstChild.style.zIndex = "0";
  } else {
    this.firstChild.style.zIndex = "1";
  }
}

// Tick heart icon (add to favourites)
function love(e) {
  const likes = document.querySelector("#our-dogs");
  el = e.target;
  if (el.classList.contains("far")) {
    el.classList.replace("far", "fas");
    e.stopPropagation();
  } else {
    el.classList.replace("fas", "far");
    e.stopPropagation();
  }
}

//on start, hide dogs Info if was saved in local storage
let hideInfo = document.getElementsByClassName("our-dogs-item");
const dupa = HTMLCollection.length;
for (let i = 0; i < hideInfo.length; i++) {
  hideInfo[i].firstChild.style.zIndex = "1";
}

// Create a list of all dogs added to favourites
function yourDogs() {
  const favouriteDogs = localStorage.getItem("likes").split("‎");
  let listOfDogs = "";

  favouriteDogs.forEach((e) => {
    if (e.indexOf("fas") !== -1) {
      listOfDogs += e;
    }
  });

  // let printListOfDogs = document.getElementById("your-dogs");
  // if (listOfDogs.length == 0) {
  //   printListOfDogs.innerHTML =
  //     "<h2 class='small-title'>You have no favourite dogs</h2><p>(Click on heart icon in top-right corner od dog picture to add him to your favourites)";
  // } else if (listOfDogs.length > 0 && listOfDogs.length < 300) {
  //   let printListOfDogs = document.getElementById("your-dogs");
  //   printListOfDogs.innerHTML = "<h2 class='small-title'>Your favourite dog is:</h2>";
  //   printListOfDogs.innerHTML += listOfDogs;
  // } else {
  //   let printListOfDogs = document.getElementById("your-dogs");
  //   printListOfDogs.innerHTML = "<h2 class='small-title'>Your favourite dogs:</h2>";
  //   printListOfDogs.innerHTML += listOfDogs;
  // }
  // localStorage.setItem("favs", listOfDogs);
}

// show favourites after click on button

const buttonFavs = document.querySelector(".showUs");
buttonFavs.addEventListener("click", showIt);

const linkToFavs = document.querySelector(".showDogs");
linkToFavs.addEventListener("click", showIt);

const favsShow = document.getElementById("your-dogs");

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
}

// Function to load favourite dogs data from LocalStorage

const savedFavs = localStorage.getItem("favs");

if (savedFavs) {
  const favs = document.querySelector("#your-dogs");
  if (savedFavs.length < 300) {
    favs.innerHTML = "<h2 class='small-title'>Your favourite dog is:</h2>" + savedFavs;
  } else {
    favs.innerHTML = "<h2 class='small-title'>Your favourite dogs:</h2>" + savedFavs;
  }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Hide scroll to top button on the end of the page

var $window = $(window),
  $document = $(document),
  button = $("#myBtn");

button.css({
  opacity: 1,
});

$window.on("scroll", function () {
  if ($window.scrollTop() + $window.height() == $document.height()) {
    button.stop(true).animate(
      {
        opacity: 0,
      },
      250
    );
  } else {
    button.stop(true).animate(
      {
        opacity: 1,
      },
      250
    );
  }
});
