// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/index';
import MainPage from './screens/MainPage/index';
import AboutUs from './screens/AboutUs/index';
import Contacts from './screens/Contacts/index';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App;
