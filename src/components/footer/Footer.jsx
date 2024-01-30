import React from 'react';
import LogoFooter from '../../assets/footer.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <img className='footer_img' src={LogoFooter} alt="logo" />
            <p className='footer_texte'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;