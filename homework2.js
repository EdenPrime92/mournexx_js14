//Комментарии в коде это я самообучаюсь.

//String: greeting

let name = prompt('What is your name?')
alert('Hello ' + name)



//String:gopni4ek

{
let str = prompt("Введите рядок:")
let part = str.split(",")
let blin = part.join(" ,блин")
alert(blin)
}



//String: capitalize

{
let str = "cANBerRa"
let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
console.log(result)
}

//String: word count

{
let str = prompt('Введите любое количество слов:')
let words = str.split(' ')
let numberOfWords = words.length
alert('Количество слов :' + numberOfWords)
}



//String: credentials

let firstName = prompt('Введите ваше имя:')
let lastName = prompt('Введите вашу фамилию:')
let fatherName = prompt('Введите ваше отчество:')
firstName = firstName.trim()
lastName = lastName.trim()
fatherName = fatherName.trim()
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
fatherName = fatherName.charAt(0).toUpperCase() + fatherName.slice(1).toLowerCase()
let fullName = lastName +' '+ firstName +' '+ fatherName
alert('Ваше имя:' + fullName)



//String: beer

{
let str = "Було жарко. Василь пив пиво вприкуску з креветками"
let words = str.split(" ")
let result = ""
let i = 0 //Используется как счётчик для итерации в цикле while

while (i < words.length) //Запускаю цикл while, который срабатывает при условии что i меньше words.length
{
    if (words[i] === "пиво") //Проверяю есть ли в массиве слово пиво с помощью условия
    {
    result += "чай" //Условие выполнено, добавляется слово чай в массив
    } 
    else 
    {
    result += words[i] //Если условие не выполнено, всё остается без изменений
    }

  if (i !== words.length - 1) //Проверяю, является ли слово "чай" последним в массиве
    {
    result += " " //Если условие выполняется, добавляется пробел для разделения слов
    }

  i++; //Переходим к следующему слову
}//Завершение цикла, замена слова "пиво" на слово "чай"

console.log(result)
}


//String: no tag

{
let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
let tagStart = "<"// Оглашаю переменные tagStart и tagEnd, которые хранят символы открытия и закрытия тега
let tagEnd = ">"
let startIndex = str.indexOf(tagStart)//Оглашаю переменную, в которой находит индекс открытия тега, с помощью метода получаения индекса части строки str(подрядка)
let endIndex = str.indexOf(tagEnd, startIndex) + tagEnd.length//Оглашаю переменную, в которой находит индекс закрытия тега
let result = str.slice(0, startIndex) + str.slice(endIndex)//Оглашаю переменную, в которой вырезает начало подрядка и конец подряка.
console.log(result)
}



//String: big tag

{
let str = "якийсь текст у якому є один тег <br /> і всяке інше"
let tag = "<br />"
let startIndex = str.indexOf(tag)// Определяю начало тэга, с помощью indexOf(tag)
let endIndex = startIndex + tag.length//определяю конец тэга, с помощью сложения начала индекса + длина тэга
let result
result = str.slice(0, startIndex) + tag.toUpperCase() + str.slice(endIndex)//Придаю тэгу заглавные буквы
alert(result)
}



//String: new line

let userText = prompt("Введите абсолютно любой текст используя '\\n' как символ для начала нового рядка:")
let multiLineString = userText.split("\\n").join("\n")
alert(multiLineString)



//String: youtube

const regex = /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/ //Объявляю регулярное выражение
const userLink = prompt("Ваша ссылка на YouTube:")
const matchResult = userLink.match(regex) //Объявляю константу, в которой подрядок регулярного выражение в скобках, будет следующим элементом массива
if (matchResult && matchResult[1])//Задаю условие и проверяю не является ли результат пустым и существует ли элемент массива, указанный в скобках
 {
  const videoId = matchResult[1]//Условие выполняется, объявляю константу в которой указываю идентификатор видео, создаю htmlBlock для вывода видео на экран
  const htmlBlock = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  document.write(htmlBlock)//Вывожу видео на экран
 } 
else 
 {
  document.write("Ссылка на YouTube не найдена.")
 }