// vars

const openModalBtn = document.querySelector('#modalOpenBtn');
const closeModalBtn = document.querySelector('#modalCloseBtn');
const backdrop = document.querySelector('#modal');

// close and open modal
function closeModal() {
    backdrop.classList.remove('open');
};

function openModal() {
    backdrop.classList.add('open');
};

// handles
function handleModalOpenBtnClicked(){
    openModal();
};

function handleModalCloseBtnClicked(){
    closeModal();
};

function handleBackdropClicked(e){
    if(e.target === e.currentTarget){
        closeModal();
    }
};

function handleKeydown(e){
    if(e.code === 'Escape'){
        closeModal();
    }
}

// Event Listeners
openModalBtn.addEventListener('click', handleModalOpenBtnClicked);
closeModalBtn.addEventListener('click', handleModalCloseBtnClicked);
modal.addEventListener('click', handleBackdropClicked);
window.addEventListener('keydown', handleKeydown);