import React from 'react';
import '../App.css'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'

function Home() {
    return (
        <div>
            <HeroSection />
            <Cards />
        </div>
    );
}

export default Home;