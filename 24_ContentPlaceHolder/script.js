const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profileImg = document.getElementById("profile_img")
const nameEl = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="laptop" />'

  title.innerHTML = "Lorem ipsum dolor sit amet."
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, id."
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  nameEl.innerHTML = "John Doe"
  date.innerHTML = "Aug 12 2022"

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
  animated_bg_texts.forEach((text) => text.classList.remove("animated-bg"))
}
