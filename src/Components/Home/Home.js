import React from 'react';
import { NewsLetter, Hero, Categories, FlashSell } from '../exporter';

const Home = () => {
    return (
        <main className='md:px-14 px-4'>
            <Hero/>
            <Categories/>
            <FlashSell/>
            <NewsLetter/>
        </main>
    );
};

export default Home;