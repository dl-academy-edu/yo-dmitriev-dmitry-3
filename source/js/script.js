// Сохраняем базовый путь к серверу.
const BASE_URL = 'https://academy.directlinedev.com';

// Данная функция нужна чисто для создания чекбокса с его уникальным id и color.
const createCheckbox = (check) => {
    return `
    <label class="checkbox">
        <input class="checkbox__input" id="${check.id}" type="checkbox">
        <span class="checkbox__mark" style="border-color: ${check.color}"></span>
    </label>
    `
}

// Данная функция нужна для того, чтобы перебрать полученные от сервера результаты и отрисовать каждый чекбокс.
const renderCheckbox = (data) => {
    for (let check of data) {
        document.querySelector('.filter__tags-wrapper').insertAdjacentHTML('beforeend', createCheckbox(check))
    }
}

// Получение тегов
(async function() {
    sendReq({
        url: '/api/tags',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(res => {
        console.log(res);
        renderCheckbox(res.data);
    })
    .catch(err => {
        if (err._message) {
            // Todo Вызов окна под ошибку.
        }
    })
})();

function sendReq({url, method = 'GET', headers, body = null}) {
    return fetch(BASE_URL + url, {
        method,
        headers,
        body
    });
}
