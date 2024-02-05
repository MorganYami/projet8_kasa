import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import bannerAbout from '../../assets/banniereAbout.png';
import Collapse from '../../components/collapse/Collapse';
import aboutData from '../../data/aboutData.json';
import './about.css';

const About = () => {
    return (
        <div>
            <Header />
            <Banner image={bannerAbout} titre="" />
            <div className='about_collapse'>
                {aboutData.map((about) => {
                    return(
                    <Collapse key={about.title} titre={about.title} description={about.description} />
                )}
                )}
            </div>
            <Footer />
        </div>
    );
};

export default About;