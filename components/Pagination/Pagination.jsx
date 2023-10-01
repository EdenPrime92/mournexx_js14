import React from 'react';
import styles from './Pagination.module.css'

function Pagination({ totalImages, activeIndex, onChange }) {
    const paginationItems = Array.from({ length: totalImages }, (_, index) => index);

    return (
        <div className={styles.Pagination}>
            {paginationItems.map((index) => (
                <span
                    key={index}
                    className={index === activeIndex ? 'active' : ''}
                    onClick={() => onChange(index)}
                >
                    {index + 1}
                </span>
            ))}
        </div>
    );
}

export default Pagination;
