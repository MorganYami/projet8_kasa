import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.css'

const Header = () => {
    const currentRoute = window.location.pathname;

    return (
        <header>
            <img src={Logo} alt='Logo' />
            <nav>
                <NavLink to='/' className={currentRoute === '/' ? 'header_lien header_lien_souligne' : 'header_lien header_lien_vide'}>Acceuil</NavLink>
                <NavLink to='/about' className={currentRoute === '/about' ? 'header_lien header_lien_souligne' : 'header_lien header_lien_vide'}>A propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;