import React from 'react';
import './cards.css';

const Cards = ({id, image, titre}) => {
    return (
        <div className='card' id={id}>
            <div className='card_background'></div>
            <img className='card_img' src={image} alt="card" />
            
            <p className='card_title'>{titre}</p>
        </div>
    );
};

export default Cards;