// Создаем объект
const person = {
    name:"Anton",
    age:36,
    skills:["Javascript","HTML","CSS"],
    salary:80000
};

// Переводим в JSON и выводим в консоль
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);