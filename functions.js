//FLATS

const apartment = {
    firstRoom: {
        length: 80,
        width: 50
    },
    secondRoom: {
        length: 120,
        width: 60
    },
    kitchen: {
        length: 60,
        width: 100
    }
};

const apartmentsSquare = Object.values(apartment).reduce((totalSquare, room) => {
    const roomArea = room.length * room.width;
    return totalSquare + roomArea;
}, 0);

console.log(apartmentsSquare)


//WORDS

const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
const consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ']
function countVowelsAndConsonants(input) {
    let vowelCount = 0
    let consonantCount = 0
    for (const letter of input) {
        if (vowels.includes(letter.toLowerCase())) {
            vowelCount++
        } else if (consonants.includes(letter.toLowerCase())) {
            consonantCount++
        }
    }
    console.log(`Количество гласных букв: ${vowelCount}`);
    console.log(`Количество согласных букв: ${consonantCount}`)
}
const words = prompt('Введите любое слово или предложение')
countVowelsAndConsonants(words)



//VALIDATION

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ua|net)$/
const emailInput = document.getElementById('emailInput')
function validateEmail() {
    const enteredEmail = emailInput.value
    const result = document.getElementById('result')
    if (emailRegex.test(enteredEmail)) {
        result.textContent = 'Введенный email является валидным.'
    } else {
        result.textContent = 'email введён некорректно'
    }
}
const checkButton = document.getElementById('checkButton')
checkButton.addEventListener('click', validateEmail)



//COFFEE

function calculateCupsOfCoffee(weightOfCoffee, grammsPerCup) {
    const cups = weightOfCoffee / grammsPerCup
    return cups
}
const totalWeightOfCoffee = 1000 
const grammsPerCup = 25 
const cupsOfCoffee = calculateCupsOfCoffee(totalWeightOfCoffee, grammsPerCup)//или calculateCupsOfCoffee(1000, 25)
console.log(`Можно приготовить ${cupsOfCoffee} чашек кофе`)



//STEPS

function calculateWalkingTime(distance, stepLength) {
    const steps = distance / stepLength; // Количество шагов
    const timeInSeconds = steps * 0.8; // человек делает 80 шагов в минуту в среднем
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${hours} ч ${minutes} мин ${seconds} с`
}
const distance = 3000; // дистанция в метрах
const stepLength = 0.5; // длина шага в метрах
const walkingTime = calculateWalkingTime(distance, stepLength);
console.log(`Время, необходимое для преодоления ${distance} м с шагом ${stepLength} м: ${walkingTime}`);


//GIGABYTES

function calculateRemainingMemory(initialMemoryGB, dataUsageMBArray) {
    const initialMemoryMB = initialMemoryGB * 1024// конвертируем ГБ в МБ, 128ГБ это 131072МБ
    const totalDataUsage = dataUsageMBArray.reduce((total, usage) => total + usage, 0)

    const remainingMemoryMB = initialMemoryMB - totalDataUsage;
    return remainingMemoryMB
}

const initialMemoryGB = 128; // Исходная память в ГБ
const dataUsageArray = [10002.2, 435.5, 7262.3, 138.7, 16545.1, 725.2, 13.13, 108.29]; // Использование данных в МБ
const remainingMemoryMB = calculateRemainingMemory(initialMemoryGB, dataUsageArray)
console.log(`Остаток памяти: ${remainingMemoryMB} МБ`)
