import React from 'react';
import { NewsLetter, Hero, Categories, FlashSell } from '../exporter';

const Home = () => {
    return (
        <main className='md:px-14 px-4'>
            <Hero/>
            <FlashSell/>
            <Categories/>
            <NewsLetter/>
        </main>
    );
};

export default Home;