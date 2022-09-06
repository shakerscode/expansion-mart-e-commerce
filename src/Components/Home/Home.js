import React from 'react';
import { NewsLetter, Hero } from '../exporter';

const Home = () => {
    return (
        <main className='md:px-14 px-4'>
            <Hero/>
            
            <NewsLetter/>
        </main>
    );
};

export default Home;