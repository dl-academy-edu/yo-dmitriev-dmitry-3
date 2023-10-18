const popupSign = document.querySelector('.sign')
const btnSign = document.querySelector('.header__nav-sign_js')
const closeBtnSign = document.querySelector('.sign__close')

btnSign.addEventListener('click', function() {
    popupSign.classList.add('sign__open');
});

closeBtnSign.addEventListener('click', function() {
    popupSign.classList.remove('sign__open');
});