import React from 'react';
import { NewsLetter, Hero } from '../exporter';

const Home = () => {
    return (
        <main className='px-14'>
            <Hero/>
            <NewsLetter/>
        </main>
    );
};

export default Home;