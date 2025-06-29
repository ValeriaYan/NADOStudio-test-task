const bottomPanel = document.querySelector('.bottom-panel')
const toggleBottomPanel = bottomPanel.querySelector('.bottom-panel__toggle')

toggleBottomPanel.addEventListener('click', () => {
  bottomPanel.classList.toggle('_active')
})