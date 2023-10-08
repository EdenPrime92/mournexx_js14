import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css'

function Timer({ onLap }) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (running) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10); // увеличиваем на 10 миллисекунд
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [running]);

    const formatTime = () => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = (time % 1000).toString().padStart(3, '0');
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    const startTimer = () => {
        setRunning(true);
    };

    const stopTimer = () => {
        setRunning(false);
    };

    const resetTimer = () => {
        setTime(0);
        setRunning(false);
    };

    const lap = () => {
        onLap(formatTime());
    };

    return (
        <div className={styles.Timer}>
            <div>{formatTime()}</div>
            <button onClick={startTimer}>START</button>
            <button onClick={stopTimer}>STOP</button>
            <button onClick={resetTimer}>RESET</button>
            <button onClick={lap}>LAP</button>
        </div>
    );
}

export default Timer;