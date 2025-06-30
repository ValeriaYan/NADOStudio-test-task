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