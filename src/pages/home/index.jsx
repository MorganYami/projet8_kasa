import React from 'react';
import Banner from '../../components/banner/Banner';
import bannerHome from '../../assets/banniere.png';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './home.css';
import Cards from '../../components/card/Cards';
import ListAccommodation from '../../data/annonce.json';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner image={bannerHome} texte="Chez vous, partout et ailleurs" />
            <div className='listAccommodation'>
                {ListAccommodation.map((accommodation) => 
                <NavLink key={accommodation.id} to={"/accommodation/"+accommodation.id+"#"}>
                    <Cards key={accommodation.id} id={accommodation.id} image={accommodation.cover} titre={accommodation.title} />
                </NavLink>)}
            </div>
            <Footer />
        </div>
    );
};

export default Home;