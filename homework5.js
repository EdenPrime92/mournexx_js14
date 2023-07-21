//Literals

const cat = {
    name : 'коняка-розбишака',
    age : '3 года',
    favoriteFood : 'всё что можно схавать'
}

const phone = {
    brand : 'POCO',
    model : 'X3 Pro',
    color : 'dark blue'
}

const PC = {
     processor : 'AMD A8-9600 RADEON R7',
     graphicCard : 'Nvidia 1060ti 6gb',
     RAM : '8 gb'     
}



//Literals expand

const key1 = prompt('Введите название ключа для объекта "cat":')
const value1 = prompt('Введите значение для ключа в объекте "cat":')
cat[key1] = value1//Добавляем значение переменной value1 в ключ 
//квадратные скобки помогают JS интерпретировать содержимое переменной key1 как имя ключа объекта.
//Если будет написано cat.key1, то JS воспримет key1 как имя ключа, а не содержимое переменной

// Добавление свойств к объекту `phone`
const key2 = prompt('Введите название ключа для объекта "phone":')
const value2 = prompt('Введите значение для ключа в объекте "phone":')
phone[key2] = value2

// Добавление свойств к объекту `PC`
const key3 = prompt('Введите название ключа для объекта "PC":')
const value3 = prompt('Введите значение для ключа в объекте "PC":')
PC[key3] = value3




//literals copy

const keyForCat = prompt('Введите название ключа для объекта "cat", например "Любимая игрушка":')
const descriptionForKey = prompt('Введите описание для Любимой игрушки кота')
cat[keyForCat] = descriptionForKey

const newCat = {...cat, [keyForCat] : descriptionForKey}



//Html tree

let myJson = {
  tagName: 'body',
  children: [
    {
      tagName: 'div',
      children: [
        {
          tagName: 'span',
          children: ['Enter a data please:']
        },
        {
          tagName: 'br'
        },
        {
          tagName: 'input',
          attrs: {
            type: 'text',
            id: 'name'
          }
        },
        {
          tagName: 'input',
          attrs: {
            type: 'text',
            id: 'surname'
          }
        }
               ]
    },
    {
      tagName: 'div',
      children: [
        {
          tagName: 'button',
          attrs: {
            id: 'ok'
          },
          children: ['OK']
        },
        {
          tagName: 'button',
          attrs: {
            id: 'cancel'
          },
          children: ['CANCEL']
        }
                ]
    }
          ]
}

const buttonText = myJson.children[1].children[1].children[0]
//children[1] - второй див элемент.children[1] - второй баттон.children[0]- единственнный ребёнок, он же текст CANCEL
console.log(buttonText)//CANCEL

const idValue =  myJson.children[0].children[3].attrs.id
//children[0] - первый див элемент.children[3] - последний элемент в диве, он же второй инпут.attrs - атрибуты инпута.id - собственно, SURNAME
console.log(idValue)//SURNAME



//Parent

myJson.children[0].parent = myJson
//Устанавливаю свойство parent для первого дочернего элемента div(он же children[0]) в родителе myJson, чтобы оно указывало на myJson как на родителя
myJson.children[1].parent = myJson
//Устанавливаю свойство parent для второго дочернего элемента div(он же children[1]) в родителе myJson, чтобы оно указывало на myJson как на родителя
myJson.children[0].children[0].parent = myJson.children[0]
//Устанавливаю свойство parent для первого дочернего элемента span в первом дочернем элементе div в корневом элементе myJson, чтобы оно указывало на первый дочерний элемент div как на родителя
myJson.children[0].children[1].parent = myJson.children[0]
//Устанавливаю свойство parent для второго дочернего элемента br в первом дочернем элементе div в корневом элементе myJson, чтобы оно указывало на первый дочерний элемент div как на родителя
myJson.children[0].children[2].parent = myJson.children[0]
//Устанавливаю свойство parent для третьего дочернего элемента input в первом дочернем элементе div в корневом элементе myJson, чтобы оно указывало на первый дочерний элемент div как на родителя
myJson.children[0].children[3].parent = myJson.children[0]
//Устанавливаею свойство parent для четвертого дочернего элемента input в первом дочернем элементе div в корневом элементе myJson, чтобы оно указывало на первый дочерний элемент div как на родителя
myJson.children[1].children[0].parent = myJson.children[1]
//устанавливаю свойство parent для первого дочернего элемента button во втором дочернем элементе div в корневом элементе myJson, что-бы оно указывало на второй дочерний элемент div как на родителя
myJson.children[1].children[1].parent = myJson.children[1]
//устанавливаю свойство parent для второго дочернего элемента button во втором дочернем элементе div в корневом элементе myJson, что-бы оно указывало на второй дочерний элемент div как на родителя



//Change OK

//изменение значения атрибута ID
const newIdValue = prompt('Введите новое значение для атрибута ID в теге button:')
myJson.children[1].children[0].attrs.id = newIdValue
//Добавление нового атрибута в button
const newAttr = prompt('Введите название для нового атрибута в теге button:')
const newAttrValue = prompt('Введите значение для нового аттрибута в теге button:')
myJson.children[1].children[0].attrs[newAttr] = newAttrValue



//Destructure
{
const { children: [ { children: [ { children: [spanText] } ] } ] } = myJson
//const { children(обращаюсь к ребенку боди, то есть первый див): [ { children(обращаюсь к ребенку див, то есть первый элемент спан): [ { children(обращаюсь к ребенку спан): [spanText](обращаюсь к массиву и извлекаю его значение) } ] } ] } = myJson
console.log(spanText)//Enter your data please

const { children: [{ children: [{}, {}] }, { children: [{}, { children: [buttonText] }] }] } = myJson
console.log(buttonText)//CANCEL

const { children: [ { children: [ , , , { attrs: { id: inputId } } ] } ] } = myJson
console.log(inputId)//surname

}



//Destruct array 

let arr = [1, 2, 3, 4, 5, "a", "b", "c"]
let [odd1, even1, odd2, even2, odd3, ...letters] = arr//использовал rest
console.log(odd1)
console.log(even1)
console.log(odd2)
console.log(even2)
console.log(odd3)
console.log(letters)



//desturct string

{
let arr = [1, 'abc']
let [number, [s1,s2,s3]] = arr
console.log(number)
console.log(s1)
console.log(s2)
console.log(s3)
}  


//destruct2

let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'},{name: 'Nikolay'}]}
let {children: [{name: name1}, {name: name2}]} = obj
//{children(ключ объекта, в котором содержаться дети): [{name: name1}, {name: name2}]}(присваиваем именам детей новые переменные)
console.log(name1); // "Maria"
console.log(name2); // "Nikolay"


//destruct 3
{
let arr = [1, 2, 3, 4, 5, 6, 7, 10]
let { 0: a, 1: b, length } = arr
//length - это ключ, который извлекается из массива arr с помощью деструктуризации.
// В данном случае { 0: a, 1: b } указывает, что мы извлекаем элементы массива по индексам 0 и 1 и присваиваем их переменным a и b. 
//А length извлекается как общее количество элементов в массиве.
console.log(a)
console.log(b)
console.log(length)
}


//Copy delete

{
const cat = {
  name : 'коняка-розбишака',
  age : '3 года',
  favoriteFood : 'всё что можно схавать'
}
const key1 = prompt('Введите название ключа для объекта "cat":')//Ключ который вводит пользователь
const value1 = prompt('Введите значение для ключа в объекте "cat":')
cat[key1] = value1
const { [key1]: userKey, ...newCat } = cat
console.log(newCat)
}


//Currency real rate


fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    const availableCurrencies = Object.keys(data.rates)
    //Свойство rates внутри объекта data содержит информацию о курсах валют
    //метод object.keys, используется для того, что бы вернуть массив со всеми перечисляемыми свойствами объекта в виде строк.
    // в итоге availableCurrencies в себе содержит массив с названиями доступных валют на основе ключей объекта data.rates
    
    //Ввод данных от пользователя
    const inputCurrency = prompt('Введите валюту, которую вы хотите обменять(напр. USD):').toUpperCase()//делаем любую валюту в верхнем регистре
    const outputCurrency = prompt('Введіть валюту для конвертирования (напр. UAH):').toUpperCase()
    const amount = parseFloat(prompt('Введите сумму валюты которую хотите обменять:'))//ParseFloat превращается строку в число
    //Проверка наличия валют в списке
    if (!availableCurrencies.includes(inputCurrency) || !availableCurrencies.includes(outputCurrency)) {
      console.log('Вы ввели неправильное название валюты')
      return;
    }
    //!availableCurrencies.includes(inputCurrency) - оператор!(логическое НЕТ) инвертирует результат проверки наличия введёной валюты.
    //То есть, если inputCurrency не содержится в availableCurrencies, условие станет true и выдаст ошибку. Аналогично и с outputCurrency.

    //Ковертация
    const rate = data.rates[outputCurrency] / data.rates[inputCurrency]
    const convertedAmount = amount * rate
    alert(`${amount} ${inputCurrency} = ${convertedAmount.toFixed(2)} ${outputCurrency}`)
  })




  //Currency drop down

fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
const currencyData = data.rates
const currencyNames = Object.keys(currencyData)//в переменную попадает массив с ключами(названиями валют)
let currencySelect = '<select>'//Объявляем переменную, которая будет выпадающим список и добавляем открывающий тег 
currencyNames.forEach(currency => {
currencySelect += `<option value="${currency}">${currency}</option>`
})//с помощью цикла forEach перебираю каждый элемент массива currencyNames
//Далее, с помощью функции, в переменную currencySelect добавляем все элементы с массива в открывающий и закрывающий тег option, по очереди.
currencySelect += '</select>'//добавляем закрывающий тег select 
document.write(currencySelect)//вуаля
})


//Currency table

fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    const currencies = Object.keys(data.rates)
    const exchangeRates = {}
    currencies.forEach(fromCurrency => {//В этой части кода, происходит вычисления курсов между всеми парами валют
      //цикл перебирает все исходные(базовые) валюты
      exchangeRates[fromCurrency] = {}//создаю пустой  объект в переменной exchangeRates, что-бы хранить курсы между исходной и остальными валютами
      currencies.forEach(toCurrency => {//с помощью цикла перебираю остальные(целевые) валюты
        if (fromCurrency === toCurrency) {// В случае если исходная валюта и целевая валюта совпадают, курс будет 1к1
          exchangeRates[fromCurrency][toCurrency] = 1
        } else {//Если валюты не совпадают, то происходит деление базовой и целевой валюты
          const crossRate = data.rates[toCurrency] / data.rates[fromCurrency]//Определяем кроскурс и сохраняем его в переменной crossRate
          exchangeRates[fromCurrency][toCurrency] = crossRate//значение полученное в крокурсе, присваивается в объект exchangeRates
        }
      })
    })
    let table = "<table>"//Создаю двумерную таблицу, добавляю открывающий тег
    table += "<tr><th></th>"//Добавляю соответствующие открывающие и закрывающие теги. Тег th определяется как ячейки для названий валют
    currencies.forEach(currency => {//добавляю названия валют, с помощью цикла и функции обратного вызова.
      table += `<th>${currency}</th>`//функция обратного вызова возвращает из массива валют название валюты и засовывает его в ячейку.
    })
    table += "</tr>"//добавляем закрывающий тег

    currencies.forEach(fromCurrency => {//внешний цикл перебирает  элементы массива как базовые валюты
      table += "<tr>"//добавляет открывающий тег, который пресдатвляет собой новую строку таблицы
      table += `<th>${fromCurrency}</th>`//добавляю ячейку заголовка столбца базовой валюты
      currencies.forEach(toCurrency => {//вложенный цикл перебирает элементы массива как целевые валюты
        const rate = exchangeRates[fromCurrency][toCurrency].toFixed(4)//Добываем значение курса обмена между базовой и целевой валютой и округляем до 4 знаков после точки
        table += `<td>${rate}</td>`//добавляется ячейка с курсом обмена между базовой и целевой валютой. Ячейка будет отображаться в текущей строке и соответствующем столбьце
      })
      table += "</tr>"//добавляем закрывающий тег в текущую строку таблицы
    })
    table += "</table>"//добавляем закрывающий тег
    document.write(table)//выводим таблицу на экран
  })



//Form

const car = {
  "Name": "chevrolet chevelle malibu",
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 130,
  "Weight_in_lbs": 3504,
  "Origin": "USA",
  "in_production": false
}
let form = "<form>"//добаляем открывающий тег form
for (const key in car) { // Перебираю ключи объекта car с помощью for...of
  form += `<label>${key}: </label><input type="${typeof car[key] === 'boolean' ? 'checkbox' : typeof car[key] === 'number' ? 'number' : 'text'}" value="${car[key]}"/><br/>`
}//Создается тег <input> с определенным типом в зависимости от типа значения ключа (boolean, number или text).
// Значение поля ввода устанавливается равным значению объекта car для данного ключа.
form += "</form>" // Добавляем закрывающий тег form
document.write(form) 


//Table

const persons = [
  {
    name: 'Марія',
    fatherName: 'Іванівна',
    surname: 'Іванова',
    sex: 'female'
  },
  {
    name: 'Миколай',
    fatherName: 'Іванович',
    surname: 'Іванов',
    age: 15
  },
  {
    name: 'Петро',
    fatherName: 'Іванович',
    surname: 'Іванов',
    married: true
  },
]


const columns = []//создаётся пустой массив, в котором будут хранится ключи
persons.forEach(person => {//перебирается каждый объект в массиве persons с поиощью цикла forEach
  for (const key in person) {//с помощью цикла for...in , перебирается каждый ключ в объектах person
    if (!columns.includes(key)) {//с помощью метода includes,проверяю, есть ли текущий ключ в массиве columns.
      //если его нет, то он добавляется в массив с помощью метода push
      columns.push(key)
    }
  }
})
let table = "<table style='border-collapse: collapse;'>" //Создаём таблицу. Добавляю открывающий тег, в котором указываю стили таблицы
table += "<tr>"//добавляю открывающий тег для рядка в таблице
columns.forEach(column => {//перебираю массив с помощью цикла и функции обратного вызова
  table += `<th style='border: 0.5px solid black; padding: 8px;'>${column}</th>` //создаются заголовки столбца, добавлены стили
})
table += "</tr>"//закрывающий тег для рядков в строке table
persons.forEach(person => {//для каждого person применяется функция обратного вызова.
  table += "<tr>"//внутри функции добавляет открывающий тег к строке
  columns.forEach(column => {//с помощью вложенного цикла forEach, перебирается каждый элемент массива columns. Сolumns содержит имена колонок (ключи) 
    const value = person[column] || ""//для каждой колонки получается(добывается) соответствующее значение из объекта person с помощью person[column].
    //Если значения нет, добавляется пустая строка
    table += `<td style='border: 0.5px solid black; padding: 8px;'>${value}</td>` // Добавлены границы и отступы для ячеек данных.
    //значение ячейки ${value} вставляется внутрь тега. Значение берётся из объекта person
  })
  table += "</tr>"//добавляю закрывающий тег для рядков в строке 
})
table += "</table>"//закрывающий тег для таблицы
document.write(table)//вуаля
