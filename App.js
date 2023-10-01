import React, { useState } from 'react';
import './App.css'
import Slider from './components/Slider/Slider.jsx'
import Pagination from './components/Pagination/Pagination.jsx'

function App() {
  const images = [
    'https://images.wallpaperscraft.ru/image/single/pejzazh_holmy_derevia_1018523_3840x2160.jpg',
    'https://images.wallpaperscraft.ru/image/single/gory_les_tuman_941650_3840x2160.jpg',
    'https://images.wallpaperscraft.ru/image/single/derevia_svet_luchi_1024517_3840x2160.jpg',
    'https://images.wallpaperscraft.ru/image/single/holmy_sneg_reka_924765_3840x2160.jpg',
    'https://images.wallpaperscraft.ru/image/single/les_derevia_tuman_1053541_3840x2160.jpg',
    'https://images.wallpaperscraft.ru/image/single/derevia_les_sneg_912918_3840x2160.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="container">
      <Slider images={images} currentImageIndex={currentImageIndex} handleImageChange={handleImageChange} />
      <Pagination totalImages={images.length} activeIndex={currentImageIndex} onChange={handleImageChange} />
    </div>
  );
}

export default App;