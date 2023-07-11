//Number: odd

const number_string = prompt("Введите любое число:");
if (!isNaN(number_string)) {//функция isNaN проверяет, является ли константа числом. Запускается конструкция if после проверки константы.
    const number = parseInt(number_string)// Преобразовывает строку в число с помощью parseInt.
    if (number % 2 === 0) {
        alert('Число четное')
    } else {
        alert('Число нечетное')
    }
} 
else {
    alert('Ошибка. Введите цифру или число')
}



//String: lexics

const userText = prompt('Введите любой текст:');
const forbiddenWords = ['хуй', 'типа', 'квантовая запутанность']
let isForbidden = false
for (let i = 0; i < forbiddenWords.length; i++) {
  if (userText.indexOf(forbiddenWords[i]) !== -1) {
    isForbidden = true
    break
  }
}
if (isForbidden) {
  alert('Не сквернословь в храме Божьем, ибо посохом переебашу')
}
else{
    alert('МАЛАДЭЦ МАЛЧИК, ХАРОШИЙ, ВАСПИТАНЫЙ МАЛЧИК')//читать с ацентом 
}




//Boolean

{//фигурные скобки что-бы ошибку не выдавало
const firstQuestion = confirm('Квантовая запутанность это квантовомеханическое явление, при котором квантовые состояния двух или большего числа объектов оказываются взаимозависимыми?')
const secondQuestion = confirm('Джейсону Стэтхему 55 лет?')
}



//Boolean: if

const firstQuestion = confirm('Квантовая запутанность это квантовомеханическое явление, при котором квантовые состояния двух или большего числа объектов оказываются взаимозависимыми?')
if(firstQuestion){
    alert('Да, так и есть.')
}
else{
    alert('Ватафак. Надо посмотреть на Википедии.')
}

const secondQuestion = confirm('Джейсону Стэтхему 55 лет?')
if(secondQuestion){
    alert('Да, ему 55 лет.')
}
else{
    alert('Ну если не веришь, то нужно снова обратится к Википедии')
}



//comparison: sizes

const size = prompt('Укажите необходимый вам размер')
let convertedSize
if(size >= 36 && size <= 40){
    alert(convertedSize = 'S (small)')
}
else if(size >=  41 && size <= 45)//else if позволяет переходит к слудющему условию, если предыдущее условие не выполнено
{
    alert(convertedSize = "M (medium)")
}
else if(size >=  46 && size <= 50){
    alert(convertedSize = "L (large)")
}
else if(size >=  51 && size <= 54){
    alert(convertedSize = 'XL (extra large)')
}
else{
    convertedSize = 'undefined'
}
alert('Размер по нашей системе: ' + size + '\nРазмер по системе США: ' + convertedSize)



//Ternary

const gender = confirm('Укажите ваш пол') ? 'Вы мужчина':'Вы женщина'
alert(gender)



//Training

//bool type cast
!!2//true
!!0//false
!!1//true
// or
2 || 1// 2, потому-что, первый истинный операнд
2 || 0// 2
//and
2 && 1// 1
1 && 2// 2
0 && 2// 0, потому-что 0 ложный операнд
// or and and difference
0 || 1 || 2// 1, так как он первый истинный операнд. 0 ложный
0 && 1 && 2// 0, потому-что 0 ложный и подальшие операнды не рассматриваются
2 || 1 || 0// 2, потому-что 2 это первый истинный операнд
2 && 1 && 0// 0, потому-что 2 это истинный операнд, переходим к 1 и это тоже истинный операнд, а 0 ложный, по-этому результат будет 0
confirm('left') || confirm('right')//если на первом confirm(left) нажмем ок, то результат будет left true, если нажать отмена, то перейдет к операнду right, в котором, если нажать ок будет true, а если нажать отмену, то в результате будет false
confirm('left') && confirm('right')//Если нажимать на все confirm ок, то результат будет true. При любом нажатии на отмену, результат будет false.
//null, undefined, so on
null || 2// 2, потому-что 2 это первый истинный операнд
undefined && 1// undefined, потому-что undefined является falsy values, то есть false. 
alert("Hello") && confirm('Are you sexy?')// undefined(falsy values), потому-что alert = undefined.
alert("Hello") || confirm('Are you drunk?')// результатом будет либо true в результате confirm, так как ОК будет первым истинным операндом, либо false в результате отмены.
//brackets and complex expressions
(undefined || 2) && (3 || 0)//3, в первых скобка 2 как первый истинный операнд, во вторых 3 аналогично, а в результате 2 && 3, будет 3, потому-что он последний истинный операнд, ложных операндов нет.
(2 && 1) || (null && 0)// 1, потому-что в первых скобка последний истинный операнд 1, ложных операндов нет, во вторых скобках null, потому-что он ложный операнд, 1||0 будет 1, потому-что он первый истинный операнд
(2 > 1) && "greater"// greater, потому-что он является непустой строкой. 
(2 < 1) && null//false, потому-что 2 не может быть меньше 1, то есть false.
null && (2 < 1)// false, потому-что null это falsy values
// ternary operator
1 ? "one" : "not one"// 'one', потому-что 1 это true.
0 ? "zero" : "not zero"// "not zero", потому-что 0 = false, сработает текст справа от двоеточия.
"0" ? "\"zero\"" : "not `zero`"//"\"zero\"", потому-что 0 является непустой строкой, то есть true.
parseInt("0") ? 'true' : 'false'//false, потому-что 0 = false.
("" || 2) && (3 || "3.5") || (4 && 5)// 3, потому-что в результате открытия скобок получится 2 && 3 || 5, в результате чего будет, 3 || 5 , где 3 это первый истинный операнд.
(-1 + 1) && "zero"// 0, потому-что в результате действий в скобках, получится 0, а 0 = false.
"-1" + 1 && "oups"// "oups", потому-что "-1" + 1 расценивается как true + true,  oups так же является true и является последним истинным операндом
(typeof null === 'object') ? "null is object" : "null is null"//null is object, потому-что при проверке typeof null === 'object', возвращается непустая строка 'object', что являентся true
// ternary && ||
Math.random() < 0.5 && 'less' || 'more'// будет зависить от того, какой значение выдасть math.Random. Если значение меньше 0.5, сработает less , как первый истинный операнд, если значение будет больше 0.5, сработает more, как первый истинный операнд.
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a// то же самое, что и выше, только теперь, будет показывать какое значние выпало, например 'less: 0.37845127554594105'
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found'// Prime, потому-что индекс 7 это 3 и он больше -1, то есть, резльтат будет true.



//Prompt: or

let age = prompt('What is your age?')
let currentYear = new Date() .getFullYear() 
let birthYear 
if (age || age === 0) {
    birthYear = currentYear - age;
    alert('Ваш год рождения: ' + birthYear)
  } else {
    alert('Ошибка. Вы не ввели год рождения или нажали кнопку отмены')
  }


  
//Confirm: or this 

  const shopping = confirm('Пошли на шоппинг?') || alert('ты - бяка')


//Confirm: if this days

{
const shopping = confirm('Пошли на шоппинг?')
if(shopping){}
else{
    alert('ты - бяка')
}
}


//Default: or
{
const firstName = prompt('Введите имя:') || 'Люк'
const surname = prompt('Введите фамилию:') || 'Скайуокер'
const fatherName = prompt('Введите отчество:') || 'Дартвейдерович'
const fullName = `${surname} ${firstName} ${fatherName}`
alert('Полное имя: ' + fullName)
}

//Default: if

let firstName = prompt('Введите имя:')
let surname = prompt('Введите фамилию:') 
let fatherName = prompt('Введите отчество:')
if (!firstName) {
  firstName = 'Люк'
}
if (!surname) {
  surname = 'Скайуокер'
}
if (!fatherName) {
  fatherName = 'Дартвейдерович'
}
let fullName = `${surname} ${firstName} ${fatherName}`
alert('Полное имя: ' + fullName)



//Login and password

const login = prompt('Введите логин:')
if (login === 'admin') {
  const password = prompt('Введите пароль:')
  if (password === 'qwerty') {
    alert('Добро пожаловать, admin!')
  } else {
    alert('Ошибка! Неверный пароль.')
  }
} else {
  alert('Ошибка! Неверный логин.')
}


//Currency exchange

const currency = prompt('Введите валюту (USD или EUR):').toUpperCase()
const isBuying = confirm('Вы хотите купить валюту?')
let rate
if (currency === 'USD') {
  rate = isBuying ? 36.9 : 37.2
} else if (currency === 'EUR') {
  rate = isBuying ? 39.80 : 40.25
} else {
  rate = 1.0
}
const amount = parseFloat(prompt('Введите сумму для обмена:'))
const result = isBuying ? amount / rate : amount * rate
alert('Результат: ' + result.toFixed(2))


//Scissors

let userValue = Number(prompt("Введите ваше число от 1 до 3, где 1 это камень, 2 это ножницы, 3 это бумага"))
let progValue = Math.ceil(Math.random() * 3)
alert(`Компьютер выбрал число ${progValue}`)
if (userValue === 1 && progValue > 1 || userValue === 2 && progValue === 3) {
    alert("Вы победили")
}
else if (userValue === 3 && progValue < 3 || userValue === 2 && progValue === 1) {
    alert("Вы проиграли")
} else {
    alert("Ничья")
}

//Дополнительное задание

const taskName = prompt('Введите название задания(Number: Odd, Lexics, Boolean, BooleanIf, Comparison, Ternary, PromptOr, ConfirmOrThis , ConfirmIfThisDays, DefaultOr, DefaultIf, LoginAndPassword, CurrencyExchange, Scissors)')


if(taskName ==='Odd')
{
    const number_string = prompt("Введите любое число:");
if (!isNaN(number_string)) {
    const number = parseInt(number_string)
    if (number % 2 === 0) {
        alert('Число четное')
    } else {
        alert('Число нечетное')
    }
} 
else {
    alert('Ошибка. Введите цифру или число')
}
}


else if(taskName ==='Lexics')
{
    const userText = prompt('Введите любой текст:');
    const forbiddenWords = ['хуй', 'типа', 'квантовая запутанность']
    let isForbidden = false
    for (let i = 0; i < forbiddenWords.length; i++) {
      if (userText.indexOf(forbiddenWords[i]) !== -1) {
        isForbidden = true
        break
      }
    }
    if (isForbidden) {
      alert('Не сквернословь в храме Божьем, ибо посохом переебашу')
    }
    else{
        alert('МАЛАДЭЦ МАЛЧИК, ХАРОШИЙ, ВАСПИТАНЫЙ МАЛЧИК')
    }
}


else if (taskName ==='Boolean')
{
const firstQuestion = confirm('Квантовая запутанность это квантовомеханическое явление, при котором квантовые состояния двух или большего числа объектов оказываются взаимозависимыми?')
const secondQuestion = confirm('Джейсону Стэтхему 55 лет?')
}


else if(taskName ==='BooleanIf'){
    const firstQuestion = confirm('Квантовая запутанность это квантовомеханическое явление, при котором квантовые состояния двух или большего числа объектов оказываются взаимозависимыми?')
if(firstQuestion){
    alert('Да, так и есть.')
}
else{
    alert('Ватафак. Надо посмотреть на Википедии.')
}

const secondQuestion = confirm('Джейсону Стэтхему 55 лет?')
if(secondQuestion){
    alert('Да, ему 55 лет.')
}
else{
    alert('Ну если не веришь, то нужно снова обратится к Википедии')
}
}
else if(taskName ==='Comparison'){
    const size = prompt('Укажите необходимый вам размер')
let convertedSize
if(size >= 36 && size <= 40){
    alert(convertedSize = 'S (small)')
}
else if(size >=  41 && size <= 45)
{
    alert(convertedSize = "M (medium)")
}
else if(size >=  46 && size <= 50){
    alert(convertedSize = "L (large)")
}
else if(size >=  51 && size <= 54){
    alert(convertedSize = 'XL (extra large)')
}
else{
    convertedSize = 'undefined'
}
alert('Размер по нашей системе: ' + size + '\nРазмер по системе США: ' + convertedSize)
}
else if(taskName === 'Ternary'){
    const gender = confirm('Укажите ваш пол') ? 'Вы мужчина':'Вы женщина'
    alert(gender)
}


else if(taskName ==='PromptOr'){
let age = prompt('What is your age?')
let currentYear = new Date() .getFullYear() 
let birthYear 
if (age || age === 0) {
    birthYear = currentYear - age;
    alert('Ваш год рождения: ' + birthYear)
  } else {
    alert('Ошибка. Вы не ввели год рождения или нажали кнопку отмены')
  }
}


else if(taskName ==='ConfirmOrThis'){
    const shopping = confirm('Пошли на шоппинг?') || alert('ты - бяка')
}


else if(taskName ==='ConfirmIfThisDays'){
    const shopping = confirm('Пошли на шоппинг?')
    if(shopping){}
    else{
    alert('ты - бяка')
}
}


else if(taskName ==='DefaultOr'){
    const firstName = prompt('Введите имя:') || 'Люк'
    const surname = prompt('Введите фамилию:') || 'Скайуокер'
    const fatherName = prompt('Введите отчество:') || 'Дартвейдерович'
    const fullName = `${surname} ${firstName} ${fatherName}`
    alert('Полное имя: ' + fullName)
}


else if(taskName ==='DefaultIf'){
let firstName = prompt('Введите имя:')
let surname = prompt('Введите фамилию:') 
let fatherName = prompt('Введите отчество:')
if (!firstName) {
  firstName = 'Люк'
}
if (!surname) {
  surname = 'Скайуокер'
}
if (!fatherName) {
  fatherName = 'Дартвейдерович'
}
let fullName = `${surname} ${firstName} ${fatherName}`
alert('Полное имя: ' + fullName)
}


else if(taskName ==='LoginAndPassword'){
    const login = prompt('Введите логин:')
if (login === 'admin') {
  const password = prompt('Введите пароль:')
  if (password === 'qwerty') {
    alert('Добро пожаловать, admin!')
  } else {
    alert('Ошибка! Неверный пароль.')
  }
} else {
  alert('Ошибка! Неверный логин.')
}
}


else if(taskName ==='CurrencyExchange'){
const currency = prompt('Введите валюту (например USD или EUR):').toUpperCase()
const isBuying = confirm('Вы хотите купить валюту?')
let rate
if (currency === 'USD') {
  rate = isBuying ? 36.9 : 37.2
} else if (currency === 'EUR') {
  rate = isBuying ? 39.80 : 40.25
} else {
  rate = 1.0
}
const amount = parseFloat(prompt('Введите сумму для обмена:'))
const result = isBuying ? amount / rate : amount * rate
alert('Результат: ' + result.toFixed(2))
}


else if(taskName ==='Scissors'){
let userValue = Number(prompt("Введите ваше число от 1 до 3, где 1 это камень, 2 это ножницы, 3 это бумага"))
let progValue = Math.ceil(Math.random() * 3)
alert(`Компьютер выбрал число ${progValue}`)
if (userValue === 1 && progValue > 1 || userValue === 2 && progValue === 3) {
    alert("Вы победили")
}
else if (userValue === 3 && progValue < 3 || userValue === 2 && progValue === 1) {
    alert("Вы проиграли")
} else {
    alert("Ничья")
}
}

//Задание на черный пояс

{
const choices = ['камень', 'ножницы', 'бумага']
const player = prompt('Введите свой выбор : камень, ножницы или бумага').toLowerCase()
const computer = choices[Math.floor(Math.random() * choices.length)]
const result =
(player === computer && 'Ничья!') || ((player === 'камень' && computer === 'ножницы') || (player === 'ножницы' && computer === 'бумага') || (player === 'бумага' && computer === 'камень') ? 'Вы победили!' : 'Победил кампухтер!')
alert(`Кампухтер выбрал: ${computer}`)
alert(result)
}