// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML который мы будем парсить
const xmlString = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

//Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNodes = [...listNode.querySelectorAll("student")];
const list = [];
studentNodes.forEach(studentNode => {
    const nameNode = studentNode.querySelector("name");
    const firstNameNode = studentNode.querySelector("first");
    const secondNameNode = studentNode.querySelector("second");
    const ageNode = studentNode.querySelector("age");
    const profNode = studentNode.querySelector("prof");

// Получение данных из атрибутов
    const langAttr = nameNode.getAttribute('lang'); 

// Запись данных в результирующий объект
    list.push({
        name: firstNameNode.textContent + ' ' + secondNameNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr,
    });
});

const result = {
    list: list
};

console.log(result);