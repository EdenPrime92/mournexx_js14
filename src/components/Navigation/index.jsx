// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.Navigation}>
            <ul>
                <li>
                    <Link to="/">Main Page</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
