import Modal from './modal.js';

const modal = Modal({ animateClasses: ['animate-pop', 'back'] })

const cards = document.querySelectorAll('.cards .card')
const deleteForm = document.querySelector('#delete-animal')

for (let card of cards) {
  const cardId = card.dataset.id

  const deleteButton = card.querySelector('button.delete')
  deleteButton.onclick = () => {
    modal.open()
    deleteForm.setAttribute('action', '/animal/delete/' + cardId)
  }
}