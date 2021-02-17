// HIDE / SHOW MENU (burger button)

const burger = document.getElementById("burger");
burger.addEventListener("click", showMenu);

function showMenu() {
  const burgerMenu = document.getElementById("burgerMenu");
  console.log(burgerMenu.style.color);
  burgerMenu.style.transform = "translateX(0px)";
}

const burgerClose = document.getElementById("closeMenu");
burgerClose.addEventListener("click", hideMenu);

function hideMenu() {
  const hideMenu = document.getElementById("burgerMenu");
  console.log(hideMenu.style.color);
  hideMenu.style.transform = "translateX(800px)";
}

// Slider
$(function () {
  $(".autoplay").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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

// SHOW UP INFO

// ADD PICTURES

let pic = document.getElementById("our-dogs");

description.dog.forEach((e) => {
  pic.innerHTML += `<div class="our-dogs-item"><img src="./dist/img/all/${
    description.dog[e.id].picture
  }" alt=""> <i class="far fa-heart"></i><p class="our-dogs-item-info">Hey, my name is: ${
    description.dog[e.id].first_name
  }<br>I am ${description.dog[e.id].age} years old<br>My breed is: ${
    description.dog[e.id].breed
  }<br>They want for me: ${description.dog[e.id].cost}</p></div>`;
});

// Function to load data from LocalStorage (if you like a dog)

const saved = localStorage.getItem("likes");

if (saved) {
  const likes = document.querySelector("#our-dogs");
  likes.innerHTML = saved;
}

// SHOW / HIDE PICTURE INFO

let picDesc = document.getElementsByClassName("our-dogs-item");
let heart = document.getElementsByClassName("fa-heart");

for (let i = 0; i < picDesc.length; i++) {
  picDesc[i].addEventListener("click", showDescription);
  heart[i].addEventListener("click", love);
  heart[i].addEventListener("click", yourDogs);
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

// Tick heart icon (add to favourites)

function love(e) {
  const likes = document.querySelector("#our-dogs");
  if (this.classList.contains("far")) {
    this.classList.replace("far", "fas");
    e.stopPropagation();
  } else {
    this.classList.replace("fas", "far");
    e.stopPropagation();
  }

  localStorage.setItem("likes", likes.innerHTML);
}

//on start, hide dogs Info if was saved in local storage

let hideInfo = document.getElementsByClassName("our-dogs-item");

for (let i = 0; i < hideInfo.length; i++) {
  hideInfo[i].firstChild.style.zIndex = "1";
}

// Create a list of all dogs added to favourites

function yourDogs() {
  const favouriteDogs = localStorage.getItem("likes").split("<div");
  let listOfDogs = "";

  favouriteDogs.forEach((e) => {
    if (e.indexOf("fas") !== -1) {
      listOfDogs += "<div" + e;
    }
  });

  const printListOfDogs = document.getElementById("yourDogs");
  printListOfDogs.innerHTML =
    "<button>Show my favourite dogs</button>  <h2>Yours favourite dogs:</h2>";
  printListOfDogs.innerHTML += listOfDogs;
}
