import React from 'react';
import styles from './Slider.module.css'

function Slider({ images, currentImageIndex, handleImageChange }) {
    return (
        <div className={styles.Slider}>
            <div className={styles.Slider}>
                <img src={images[currentImageIndex]} alt={`${currentImageIndex + 1}`} />
            </div>
        </div>
    );
}

export default Slider;

