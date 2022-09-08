import React from 'react';
import { NewsLetter, Hero, Categories, FlashSell, UserProducts } from '../exporter';

const Home = () => {
    return (
        <main className='md:px-14 px-4'>
            <Hero/>
            <FlashSell/>
            <Categories/>
            <UserProducts/>
            <NewsLetter/>
        </main>
    );
};

export default Home;