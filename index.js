fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => {
        createDivElements()
        data.results.forEach((planet, index) => {
            const filmUrls = planet.films
            const filmTitles = []
            filmUrls.forEach(filmUrl => {
                fetch(filmUrl)
                    .then(response => response.json())
                    .then(film => {
                        filmTitles.push(film.title)
                        if (filmTitles.length === filmUrls.length) {
                            const cardDiv = document.querySelectorAll('.card')[index];
                            const h2 = cardDiv.querySelector('h2');
                            const p = cardDiv.querySelector('p');
                            h2.textContent = planet.name
                            p.textContent = `Фильмы : ${filmTitles.join(', ')}`;
                        }
                    })
            })
            const button = document.createElement('button');
            button.textContent = 'Персонажи';
            button.addEventListener('click', () => {
                fetchCharacters(planet.residents);
            });
            const cardDiv = document.querySelectorAll('.card')[index];
            cardDiv.appendChild(button);
        })
    })

function createDivElements() {
    const imageUrl = [
        'https://upload.wikimedia.org/wikipedia/uk/f/f8/Tatooine_bf1.jpg',
        'https://upload.wikimedia.org/wikipedia/uk/5/55/AlderaanPlanet.png',
        'https://upload.wikimedia.org/wikipedia/uk/8/88/Yavin4_bf1.jpg',
        'https://upload.wikimedia.org/wikipedia/uk/f/f6/Hoth_bf1.jpg',
        'https://upload.wikimedia.org/wikipedia/en/1/1c/Dagobah.jpg',
        'https://upload.wikimedia.org/wikipedia/uk/7/74/Bespin_bf1.jpg',
        'https://upload.wikimedia.org/wikipedia/uk/0/06/PlanetNaboo.png',
        'https://upload.wikimedia.org/wikipedia/uk/d/df/Endor_bf1SW.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/ec/Coruscant.jpg',
        'https://upload.wikimedia.org/wikipedia/uk/1/16/Kamino_bf1.jpg'
    ];

    for (let i = 0; i < imageUrl.length; i++) {
        const div = document.createElement('div');
        div.classList.add('card');

        const img = document.createElement('img');
        img.src = imageUrl[i];
        img.alt = 'img';

        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(p);
        document.body.appendChild(div);
    }
}

function fetchCharacters(residents) {
    const characterNames = [];
    residents.forEach(residentUrl => {
        fetch(residentUrl)
            .then(response => response.json())
            .then(character => {
                characterNames.push(character.name);
            })
            .then(() => {
                if (characterNames.length === residents.length) {
                    const characterList = characterNames.join(', ');
                    alert(`Персонажи с планеты: ${characterList}`);
                }
            });
    });
}


// .then(response => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error(`Ошибка при выполнении запроса : ${response.status}`)
//     }
// })
