import React from 'react';
import styles from './Output.module.css'

const Output = ({ times }) => {
    return (
        <div className={styles.Output}>
            <p>Lap Times:</p>
            <ul>
                {times.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
        </div>
    );
}

export default Output;
