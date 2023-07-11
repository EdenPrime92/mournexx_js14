//На мои комментарии в коде не обращайте внимания, это я самообучаюсь=)


//assign: evaluation


var a = 5
var b, c

b = (a * 5)
b = 25
b = (c = b / 2)
b = c = (b / 2)
b = c = 12.5



//Number: age

let age = prompt('What is your age?')
let currentYear = new Date() .getFullYear() //'new Date()' создаст новый объект Date, представляет текущую дату и время. Метод getFullYear() вызывается на этом объекте, что-бы получить только год.
let birthYear = currentYear - age
alert('Yours birth year:' + birthYear)



//Number: temperature

let celsius = prompt("Enter temperature in Celsius degrees:")
let fahrenheit = (celsius * 9/5) + 32  //формула вычесления градусов по Фаренгейту.
alert("temperature in Fahrenheit: " + fahrenheit)



//Number: divide

let number1 = prompt("Введите первое число:")
let number2 = prompt("Введите второе число:")
number1 = parseInt(number1)// parseInt преобразовывает значения введеные в prompt в числа.
number2 = parseInt(number2)
let result = Math.floor(number1 / number2);//Math.floor округляет результат деления вниз, до ближайшего целого числа.
alert("Результат деления нацело: " + result)



//Number: currency

const rate = 36.93
let amount = prompt("Сколько вы хотите обменять?:")
amount = parseFloat(amount)  //parseFloat превращаем введёное значение в десятичное число(число с плавающей точкой)
let exchangedAmount = (amount * rate).toFixed(2)// .toFixed(2) ограничивает максимальное число цифр после точки до двух
alert("Вы получите после обмена: " + exchangedAmount)



//Number: RGB

const red = prompt("Введите значение красного канала (0-255):")
const green = prompt("Введите значение зелёного канала (0-255):")
const blue = prompt("Введите значение синего канала(0-255):")
let hexRed = parseInt(red).toString(16).padStart(2, '0') //parseInt превращает введеные значения prompt в число, toString превращает в шестнадцатеричное представление, padStart добавляет нули, если значение имеет меньше двух цифр
let hexGreen = parseInt(green).toString(16).padStart(2, '0')
let hexBlue = parseInt(blue).toString(16).padStart(2, '0')
let color = '#' + hexRed + hexGreen + hexBlue
alert("Цвет в шестнадцатеричной системе: " + color)



//Number: flats

let maxFloors = prompt("Количество этажей в здании:")
let apartmentsPerFloor = prompt("Количество квартир на этаже:")
let Apartment = prompt("Номер квартиры:")
maxFloors = parseInt(maxFloors)
apartmentsPerFloor = parseInt(apartmentsPerFloor)
Apartment = parseInt(Apartment)
let entrance = Math.ceil(Apartment / (maxFloors * apartmentsPerFloor)) // Math.ceil округляет полученное значение вверх до целого числа.
let floor = Math.ceil((Apartment - (entrance - 1) * maxFloors * apartmentsPerFloor) / apartmentsPerFloor)
alert("Кваритра №" + Apartment + " находится в " + entrance + "-м подъезде " + floor + "-м этаже.")

