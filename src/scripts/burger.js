const burgerBtn = document.getElementById('burgerBtn')
const nav = document.querySelector('.header__info')

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('_active')
  burgerBtn.classList.toggle('_active')
})