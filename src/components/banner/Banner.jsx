import React from 'react';
import './banner.css'

const Banner = ({image, texte}) => {
    return (
        <div className='banner'>
            <img className='banner_img' src={image} alt="bannière" />
            <div className='banner_background'></div>
            <p className='banner_text'>{texte}</p>
        </div>
    );
};

export default Banner;