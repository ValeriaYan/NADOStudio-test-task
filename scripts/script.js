// swiper
const swiper = new Swiper(".main__swiper", {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// burger

const burgerBtn = document.getElementById('burgerBtn')
const nav = document.querySelector('.header__info')

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('_active')
  burgerBtn.classList.toggle('_active')
})

// modal

const openModalBtn = document.getElementById('openModal')
const closeModalBtn = document.getElementById('closeModal')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')

function closeModal() {
    modal.classList.remove('_active')
    overlay.classList.remove('_active')
}

openModalBtn.addEventListener('click', () => {
    modal.classList.add('_active')
    overlay.classList.add('_active')
})

closeModalBtn.addEventListener('click', () => {
    closeModal()
})

overlay.addEventListener('click', (event) => {
    if(!event.target.closest('.modal')) {
        closeModal()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// toggleBottomPanel

const bottomPanel = document.querySelector('.bottom-panel')
const toggleBottomPanel = bottomPanel.querySelector('.bottom-panel__toggle')

toggleBottomPanel.addEventListener('click', () => {
  bottomPanel.classList.toggle('_active')
})