import React, { useState } from 'react';
import './carrousel.css';
import flecheDroite from '../../assets/arrowRight.png';
import flecheGauche from '../../assets/arrowLeft.png';


const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cliqueAv = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const cliqueAp = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  //No arrow if only 1 photo
  if (images.length == 1) {
    return (
      <div className="carrousel">
        <img className='carrousel_img' src={images[currentImageIndex]} alt="carousel" />
      </div>
    );
  }
  //else fonctionnel carrousel
  else {
    return (
      <div className="carrousel">
        <img className='fleche carrousel_flecheG' onClick={cliqueAv} src={flecheGauche} alt="flechegauche" />
        <img className='carrousel_img' src={images[currentImageIndex]} alt="carousel" />
        <img className='fleche carrousel_flecheD' onClick={cliqueAp} src={flecheDroite} alt="flechedroite" />
        <p className='nbImg'>{currentImageIndex + 1} / {images.length}</p>
      </div>
    );
  };
};

export default Carousel;