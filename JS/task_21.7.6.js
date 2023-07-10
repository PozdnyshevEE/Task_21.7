//Получение данных из страницы
const pagesInput = document.querySelector('.pages_input');
const limitInput = document.querySelector('.limit_input');
const btnRequest = document.querySelector('.btnRequest');
const result = document.querySelector('.resultDiv');

//Получение данных в localStorage
let myKey = localStorage.getItem('imgKey');

//Функция для возврата fetch
const useRequest = () => {
	return fetch(`https://picsum.photos/v2/list?page=${pagesInput.value}&limit=${limitInput.value}`)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			return json;
		})
		.catch(() => {
			console.log('Возникла ошибка');
		});
}

//Отображение результата
function displayResult(apiData) {
	let cards = '';

	for (var item in apiData) {
		const imgUrl = apiData[item].download_url;
		const imgAuthor = apiData[item].author;
		const cardBlock = `<div class="card"><img src="${imgUrl}" class="card-image"/><p>${imgAuthor}</p></div>`;
		cards = cards + cardBlock;
	}
		
	result.innerHTML = cards;
}

function CheckPage(num) {
	if (num >= 1 && num <= 10) {
		return true;
	} else {
		return false;
	}
}

btnRequest.addEventListener('click', async () => {
	console.log('start');
	if (CheckPage(pagesInput.value) === true && CheckPage(limitInput.value) === true) {
		const requestResult = await useRequest();
		console.log(requestResult);
		displayResult(requestResult);
		localStorage.setItem('imgKey', JSON.stringify(requestResult));
	} else {
		if (myKey !== null) {
			imgOutput(JSON.parse(myKey));
		}
	}

});