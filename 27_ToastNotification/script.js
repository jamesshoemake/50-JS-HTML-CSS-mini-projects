const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = ["Chonk 1", "Chonk 2", "Chonk 3", "Chonk 4"]
const types = ["info", "success", "error"]

button.addEventListener("click", () => createNotification())

const createNotification = (message = null, type = null) => {
  const notify = document.createElement("div")
  notify.classList.add("toast")
  notify.classList.add(type ? type : getRandomType())

  notify.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notify)

  setTimeout(() => {
    notify.remove()
  }, 3000)
}

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)]
}
