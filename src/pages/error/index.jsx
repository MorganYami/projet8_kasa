import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { NavLink } from 'react-router-dom';
import './error.css';

const Error = () => {
    return (
        <div>
            <Header />
            <div className='error'>
                <h1>404</h1>
                <p className='error_texte'>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className='error_lien'>Retourner sur la page d'acceuil</NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error;