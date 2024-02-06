import React from 'react';
import './tags.css';

const Tags = ({name}) => {
    return (
        <p className='tags'>{name}</p>
    );
};

export default Tags;