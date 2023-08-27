const people = JSON.parse(localStorage.getItem('people')) || []//данные в локальном хранилище появятся после того, как юзер нажмет кнопку Сохранить данные
//преобразовывает в JSON структуру
//попытка получения данных с ключем people из локального хранилища
//без || [] не хочет работать.


function updatePeopleCount() {//ф-я обновляет количество людей, сохранивших свои данные
    const peopleCountElement = document.getElementById('peopleCount')
    peopleCountElement.textContent = people.length// с помощью textContent меняем значение на длину массива people
}
function saveData() {//функция добавления данных в кэш
    const person = {//берёт значения из каждого элемента хтмл документа и хранит как объект person
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.getElementById('gender').value,
        name: document.getElementById('name').value,
        zodiac: document.getElementById('zodiac').value,
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value
    };
    
    people.push(person)//пушит person в массив people 
    localStorage.setItem('people', JSON.stringify(people))//преобразовывает в JSON структуру и добавляет(сохраняет) в локальное хранилище пару ключ-значение
    updatePeopleCount()
    alert('Данные сохранены!')
}
// Обновляем отображение данных на четвертом слайде
function updateSlideFourData() {
    const peopleCountElement = document.getElementById('peopleCount')//счетчик людей заполнивших анкету
    const highestElement = document.getElementById('highest')//самый высокий
    const coincidencesElement = document.getElementById('coincidences')//совпадения
    const totalWeightElement = document.getElementById('totalWeight')//общий весет
    const resetButton = document.getElementById('resetButton')//кнопка сброса всех данных, которые хранятся в внутреннем хранилище

    // Количество людей
    peopleCountElement.textContent = people.length

    // Самый высокий //можно сделать sort'ом
    const highestPerson = people.reduce((highest, person) => {
        return parseInt(person.height) > parseInt(highest.height) ? person : highest//сравниваем роста текущего человека и рост хранящийся в аккумуляторе highest
    }, { height: 0 })
    highestElement.textContent = highestPerson.name + ' (' + highestPerson.height + ' см)' || ''//выводим значение на экран

    // Совпадения по именам пользователей
    const nameCounts = {}
    for (const person of people) {
        const name = person.name.split(' ')[1]; // Получаем имя, разделив ФИО сплитом и выделив имя(индекс1)
        if (nameCounts[name]) {//если ключ (имя) находится в объекте nameCounts
            nameCounts[name]++//увеличиваем значение ключа на 1
        } else {
            nameCounts[name] = 1//если ключ(имя) встречается первый раз, добавляем ему значение 1
        }
    }
    let mostCommonName = ''//строка для хранения имени
    let maxCount = 0//переменная хранит максимальное количество совпадений
    for (const name in nameCounts) {//пробегаем по именам в объекте nameCounts
        if (nameCounts[name] > maxCount) {//если количество совпадений для текущего имени (nameCounts[name]) больше, чем текущее максимальное количество совпадений (maxCount)
            maxCount = nameCounts[name]//обновляем maxCount
            mostCommonName = name//устанавливаем текущее имя как самое часто повторяемое
        }
    }
    coincidencesElement.textContent = mostCommonName + ': ' + maxCount// выводим на экран имя и значение
    
// Общий вес
let totalWeight = 0//переменная для хранения общего веса
for (const person of people) {//проходит по каждому объекту в массиве
    totalWeight += parseInt(person.weight)//добавляет вес в переменную
}
totalWeightElement.textContent = totalWeight//вывожу на экран
   
// Добавляем обработчик события на кнопку сброса данных
resetButton.addEventListener('click', resetData)
}

// Функция для сброса данных
function resetData() {
    localStorage.removeItem('people')
    location.reload()//Перезагружаем страницу после сброса данных
}

// Вызываем функцию обновления данных на четвертом слайде
updateSlideFourData()

const saveButton = document.getElementById('saveButton')
saveButton.addEventListener('click', saveData)


//Как можно сделать функцию сейвДата покороче