
const modalButtons = document.querySelectorAll('.modal-btn');
 
let activeModal = null;
 
function findModalByTarget(elementWithTarget) {
  const targetModalId = elementWithTarget.dataset.target;
  return document.querySelector(`#${targetModalId}`);
}
 
function openModal(modalElem) {
  activeModal = modalElem;
  modalElem.classList.add('open');
}
 
function closeModal() {
  if (activeModal !== null) {
    activeModal.classList.remove('open');
    activeModal = null;
  }
}
 
function handleOpenModalButtonClick(e) {
  const targetModal = findModalByTarget(e.target);
  openModal(targetModal);
}
 
function handleCloseModalButtonClick() {
  closeModal();
}
 
function handleBackdropElemClick(e) {
    if(e.target === e.currentTarget){
        closeModal();
    }
}

function handleKeyClick(e) {
    if(e.code === 'Escape'){
        closeModal();
    }
}
 
modalButtons.forEach((modalButton) => {
  modalButton.addEventListener('click', handleOpenModalButtonClick);
 
  const modal = findModalByTarget(modalButton); // Шукаємо модалку по data-target
  const closeBtn = modal.querySelector('.modal-close'); // Шукаємо кнпоку закриття в модалці
  closeBtn.addEventListener('click', handleCloseModalButtonClick); // Обробляємо клік по кнопці закриття
  modal.addEventListener('click', handleBackdropElemClick);
  window.addEventListener('keydown', handleKeyClick);
});
 
