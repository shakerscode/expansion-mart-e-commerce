import React from 'react';
import { NewsLetter, Hero, Categories, FlashSell, UserProducts, Eggs, Fruits, Meat, Advertisement, Coupon , TopProducts, Blogs} from '../exporter';
 
const Home = () => {
    const adsTop = [
        {off: '5%', title: 'Hot Deals on New Items', subTitle: 'Daily Essentials Eggs & Dairy', image: Eggs},
        {off: '5%', title: 'Buy More & Save More', subTitle: 'Fresh Testy Fruits', image: Fruits},
        {off: '5%', title: 'Fresh Meat', subTitle: 'Delivered to Your Home', image: Meat},
    ]
    return (
        <main className='md:px-14 px-4'>
            <Hero/>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-3 my-10'>
                {
                    adsTop?.map((ad, i) => <Advertisement key={i} items={ad}/>)
                }
            </section>
            <FlashSell/>
            <Categories/>
            <UserProducts/>
            <Coupon/>
            <TopProducts/>
            <Blogs/>
            <NewsLetter/>
        </main>
    );
};

export default Home;