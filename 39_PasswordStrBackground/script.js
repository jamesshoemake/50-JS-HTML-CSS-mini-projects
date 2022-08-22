const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length

  let blurValue = 20 - length * 2
  if (blurValue < 0) blurValue = 0
  console.log(blurValue)
  background.style.filter = `blur(${blurValue}px)`
})
