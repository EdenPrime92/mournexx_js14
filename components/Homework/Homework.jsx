import './Homework.css'
import React, { useState, useEffect } from 'react';

const Homework = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => {
                setPlanets(data.results);
            });
    }, []);

    function fetchCharacters(residents) {
        const characterPromises = residents.map(residentUrl =>
            fetch(residentUrl).then(response => response.json())
        );

        Promise.all(characterPromises)
            .then(characters => {
                const characterNames = characters.map(character => character.name);
                const characterList = characterNames.join(', ');
                alert(`Персонажи с планеты: ${characterList}`);
            });
    }

    useEffect(() => {
        const fetchFilmInfo = async () => {
            const planetsWithFilms = await Promise.all(planets.map(async planet => {
                const filmPromises = planet.films.map(filmUrl =>
                    fetch(filmUrl).then(response => response.json())
                );
                const films = await Promise.all(filmPromises);
                return { ...planet, films };
            }));
            setPlanets(planetsWithFilms);
        };

        fetchFilmInfo();
    }, [planets]);

    return (
        <div className='planets'>
            {planets.map((planet, index) => (
                <div className="card" key={index}>
                    <h2>{planet.name}</h2>
                    <h3>Films:</h3>
                    <ul>
                        {planet.films.map((film, filmIndex) => (
                            <li key={filmIndex}>{film.title}</li>
                        ))}
                    </ul>
                    <img src='https://upload.wikimedia.org/wikipedia/uk/f/f8/Tatooine_bf1.jpg' alt={planet.name} />
                    <button onClick={() => fetchCharacters(planet.residents)}>Персонажи</button>
                </div>
            ))}
        </div>
    );
}

export default Homework;