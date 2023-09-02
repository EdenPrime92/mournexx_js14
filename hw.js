class Handler {
    constructor() {
        this.selectedElements = [];
        this.btn = document.getElementById('btn');

        this.btn.addEventListener('click', () => {
            this.logSelectedElements();
        });
    }

    handle() {
        const selectedElements = document.querySelectorAll('.box.selected');
        const selectedElementTexts = [];

        selectedElements.forEach((element) => {
            selectedElementTexts.push(element.textContent);
        });

        return selectedElementTexts;
    }

    logSelectedElements() {
        const selectedElementTexts = this.handle();

        if (selectedElementTexts.length > 0) {
            console.log('Выбраны элементы № ' + selectedElementTexts.join(', '));
        } else {
            console.log('Ни один элемент не выбран.');
        }
    }
}

const myHandler = new Handler();
