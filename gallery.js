
//  These code author by Dandan ZHAO
const images = [{url: "./images /2.jpg", title: "city2"}, {url: "./images /3.jpg", title: "city3"},
{url: "./images /4.jpg", title: "city4"},{url: "./images /5.jpg", title: "city5"}, {url: "./images /6.jpg", title: "city6"},
{url: "./images /7.jpg", title: "city7"}, {url: "./images /8.jpg", title: "city8"}]

const next = document.querySelector(".next")
const img = document.querySelector(".slider-wrapper img")
const p = document.querySelector(".slider-footer p")
const footer = document.querySelector(".slider-footer ")
let i = 0
next.addEventListener("click", function(){
    i++
    if (i >= images.length) {
        i = 0
    }
    toggle()
})


const prev = document.querySelector(".prev")
prev.addEventListener("click", function(){
    i--
    if (i < 0) {
        i = data.length - 1
    }
    toggle()
})
    

function toggle() {
    img.src = images[i].url
    p.innerHTML = images[i].title
    footer.style.backgroundColor = images[i].color
    document.querySelector(".slider-indicator .active").classList.remove("active")
    document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add("active")

}


let timerId = setInterval(function(){
next.click()
}, 1000)

const slider = document.querySelector(".slider")
slider.addEventListener("mouseenter", function(){
clearInterval(timerId)
})


slider.addEventListener("mouseleave", function(){
clearInterval(timerId)
timerId = setInterval(function(){
next.click()
}, 1000)
})