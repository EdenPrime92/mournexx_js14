
const goods = []
for (let i = 1; i <= 40; i++) {
    goods.push("Товар №" + i);
}

const goodsPerPage = 5;

const mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "mainDiv");
const paginationTopic = document.getElementsByTagName("h1")[0];
paginationTopic.before(mainDiv)

// Считает нужное количество кнопок пагинации
function numberOfButtons(arr, num) {
    return Math.ceil(arr.length / num)
}

// Отрисовывает кнопки пагинации
function getPaginationButton(count) {
    for (i = 1, r = ""; i <= count; i++) {
        r += `<button class="pb">${i}</button>`
    }
    return r
}

// Отрисовывает результаты
function getResult(arr) {
    for (i = 0, r = ""; i < arr.length; i++) {
        r += `<p class="result-item">${arr[i]}</p>`
    }
    return r
}

// Линия кнопок под результатами отбора
const buttonLine = document.createElement("div");
buttonLine.setAttribute("class", "buttonLine");
buttonLine.innerHTML = getPaginationButton(numberOfButtons(goods, goodsPerPage));

// Блок для отрисовки результатов
const result = document.createElement("div");
result.setAttribute("class", "result");

// Первичная отрисовка
result.innerHTML = getResult(goods.slice(0, goodsPerPage))

// Помещаем линии кнопок и результат
mainDiv.append(result, buttonLine)

// Вешаем обработчик для всех кнопок пагинации
document.addEventListener('click', function (event) {
    if ([...event.target.classList].includes("pb")) {
        const pageNumber = event.target.textContent;
        const start = goodsPerPage * (pageNumber - 1);
        const end = goodsPerPage * pageNumber;
        result.innerHTML = getResult(goods.slice(start, end));
    } else {
        console.log(event.target)
    }
});
