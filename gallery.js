//  These code author by Dandan ZHAO
const images = [
  { url: "/img/2.jpg", title: "Manhattan" },
  { url: "/img/3.jpg", title: "New York" },
  { url: "/img/4.jpg", title: "Seattle" },
  { url: "/img/5.jpg", title: "Berlin" },
  { url: "/img/6.jpg", title: "London" },
  { url: "/img/7.jpg", title: "Florence" },
  { url: "/img/8.jpg", title: "Venice" },
];

const next = document.querySelector(".next");
const img = document.querySelector(".slider-wrapper img");
const p = document.querySelector(".slider-footer p");
const footer = document.querySelector(".slider-footer ");
let i = 0;
next.addEventListener("click", function () {
  i++;
  if (i >= images.length) {
    i = 0;
  }
  toggle();
});

const prev = document.querySelector(".prev");
prev.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = data.length - 1;
  }
  toggle();
});

function toggle() {
  img.src = images[i].url;
  img.classList.add("galleryimages");
  p.innerHTML = images[i].title;
  p.classList.add("gallerytitle");
  footer.style.backgroundColor = images[i].color;
  document
    .querySelector(".slider-indicator .active")
    .classList.remove("active");
  document
    .querySelector(`.slider-indicator div:nth-child(${i + 1})`)
    .classList.add("active");
}

let timerId = setInterval(function () {
  next.click();
}, 1000);

const slider = document.querySelector(".slider-wrapper");
slider.addEventListener("mouseenter", function () {
  clearInterval(timerId);
});

slider.addEventListener("mouseleave", function () {
  clearInterval(timerId);
  timerId = setInterval(function () {
    next.click();
  }, 1000);
});

// following authored by Lang Gui

const darkModeBtn = document.getElementById("dark-mode-button");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode";
    darkModeBtn.style.backgroundColor = "white";
    darkModeBtn.style.color = "black";
  } else {
    darkModeBtn.textContent = "Dark Mode";
    darkModeBtn.style.backgroundColor = "";
    darkModeBtn.style.color = "";
  }
});
