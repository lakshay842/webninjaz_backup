const showPopup = document.querySelector('.show-popup')
const modal = document.querySelector('.modal-container')

showPopup.onclick = ()=>{
    modal.classList.add('active');
}