const popupMessage = document.querySelector('.message')
const btnMessage = document.querySelector('.footer__message-send_js')
const closeBtnMessage = document.querySelector('.message__close')

btnMessage.addEventListener('click', function() {
    popupMessage.classList.add('message__open');
});

closeBtnMessage.addEventListener('click', function() {
    popupMessage.classList.remove('message__open');
});