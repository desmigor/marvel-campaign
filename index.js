const hamburger = document.querySelector("#hamburger")
const close = document.querySelector("#close")
const menu = document.querySelector("#menu")
const lines = document.querySelectorAll(".lines")
const cross = document.querySelectorAll(".cross")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
    menu.classList.remove("hidden")
    close.classList.remove("hidden")
})

close.addEventListener("click", (e) => {
    menu.classList.add("hidden")
    close.classList.add("hidden")
})

hLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
        close.classList.add("hidden")
    })
})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
})