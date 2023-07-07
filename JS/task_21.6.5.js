const idUser = document.querySelector('.id_input');
const btnList = document.querySelector('.btnList');
const outputList = document.querySelector('.outputList');

// Функция которая возвращает fetch
const useRequest = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${idUser.value}/todos`)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        return json;
    })
    .catch(() => {
        console.log('error')
    });
}
// Функция создания списка задач
function listOutput(list) {
    let listOfTasks = '';
// Перебираем полученый список
    for (let key in list) {
        const titleTasks = list[key]['title'];
        const statusTasks = list[key]['completed'];
        // Формируем пункты списка для вывода
        let itemList;
        if(statusTasks) {
            itemList = `<li style="text-decoration: line-through">${titleTasks}</li>`;
        } else {
            itemList = `<li>${titleTasks}</li>`;
        }
        listOfTasks = listOfTasks + itemList;
    }
    // Выводим на экран готовый список задач
    outputList.innerHTML = listOfTasks;
}
// Обработчик для кнопки
btnList.addEventListener('click', async() => {
    console.log('start');
    const requestResult = await useRequest();
    // Проверяем список на наличие данных
    if(requestResult.length > 0) {
        listOutput(requestResult);
    } else {
        console.log('Пользователь с указанным id не найден');
        listOutput(null);
    }

    console.log('end');
});
