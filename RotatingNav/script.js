const open = document.getElementById('open')
const close = document.getElementById('close')
const containter = document.querySelector('.container')

open.addEventListener('click', () => containter.classList.add('show-nav'))
close.addEventListener('click', () => containter.classList.remove('show-nav'))
