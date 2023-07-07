let num;

// Получаем рандомное число
function randomNumber() {
    num = Math.ceil(Math.random() * 100);
}

// Создаем promise
const myPromise = new Promise((resolve, reject) => {

    // Выставляем таймаут
    setTimeout(randomNumber(), 3000);
    if (num % 2 == 0) {
        resolve(`Завершено успешно. Сгенерированное число — ${num}`);
    } else {
        reject(`Завершено с ошибкой. Сгенерированное число — ${num}`);
    }
});

// Выполнение promise
myPromise
    .then((result) => {
        console.log('Обрабатвыаем resolve', result);
    })
    .catch((error) => {
        console.log('Обрабатвыаем reject', error);    
    });