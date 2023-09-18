function appendEl(el) {
    document.body.append(el);
}

function createEl(elementType) {
    return document.createElement(elementType);
}

function createGame() {
    const riddleDiv = createEl('div');
    riddleDiv.classList.add('riddle');
    riddleDiv.textContent = riddle;
    appendEl(riddleDiv);

    const answerDiv = createEl('div');
    answerDiv.classList.add('answer');
    const answerText = answer.toLowerCase();
    const answerChars = answerText.split('').map((letter) => {
        const letterDiv = createEl('div');
        letterDiv.classList.add('letter');
        if (letter === ' ') {
            letterDiv.textContent = ' ';
        } else {
            letterDiv.textContent = '_';
        }
        answerDiv.appendChild(letterDiv);
        return letterDiv;
    });
    appendEl(answerDiv);

    const inputElement = createEl('input');
    inputElement.classList.add('input');
    appendEl(inputElement);

    const checkButton = createEl('button');
    checkButton.classList.add('btn');
    checkButton.textContent = 'Проверить букву';
    appendEl(checkButton);

    let revealedLetters = 0;
    let attempts = 4;
    const attemptsDisplay = createEl('div');
    attemptsDisplay.classList.add('attempts');
    attemptsDisplay.textContent = `Попыток осталось: ${attempts}`;
    appendEl(attemptsDisplay);

    checkButton.addEventListener('click', function () {
        const enteredLetter = inputElement.value.toLowerCase();
        if (attempts > 0) {
            if (answerText.includes(enteredLetter)) {
                answerChars.forEach((letterDiv, index) => {
                    if (answerText[index] === enteredLetter && letterDiv.textContent === '_') {
                        letterDiv.textContent = answer[index];
                        revealedLetters++;
                    }
                });
                if (revealedLetters === answerText.length) {
                    alert('Поздравляю, вы угадали слово');
                }
            } else {
                attempts--;
                attemptsDisplay.textContent = `Попыток осталось: ${attempts}`;
                if (attempts === 0) {
                    alert('Вы проиграли');
                    checkButton.disabled = true;
                }
            }
        }
    });
}

const riddle = 'Он \'создающий\' и \'берущий\' соединяет,\nвыполнения ожидает, \nв случае успеха решает,\nа ошибок не принимает.';
const answer = 'PROMISE';

function* gameGenerator() {
    const startButton = createEl('button');
    startButton.textContent = 'Начать игру';
    startButton.classList.add('startButton')
    appendEl(startButton);

    yield startButton.addEventListener('click', () => {
        document.body.removeChild(startButton);
        createGame();
    });
}

function runGame() {
    const game = gameGenerator();
    game.next();
}

runGame();
