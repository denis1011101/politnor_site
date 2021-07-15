const article__text = document.querySelector('.article__text');
/*
async function f() {
    src="https://telegram.org/js/telegram-widget.js?14" data-telegram-post="politnor/439" data-width="100%" data-color="343638" data-dark-color="FFFFFF"
}
*/

function loadData() {
    return new Promise((resolve, reject) => {
        // setTimeout не является частью решения
        // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
        setTimeout(resolve, 2000);
    })
}

loadData()
    .then(() => {
        let preloaderEl = document.querySelector('.preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    });