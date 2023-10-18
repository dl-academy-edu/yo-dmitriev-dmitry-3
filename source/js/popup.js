const popup = document.querySelector('.contact')
const btn = document.querySelector('.header__nav-register_js')
const closeBtn = document.querySelector('.contact__close')

btn.addEventListener('click', function() {
    popup.classList.add('contact__open');
});

closeBtn.addEventListener('click', function() {
    popup.classList.remove('contact__open');
});