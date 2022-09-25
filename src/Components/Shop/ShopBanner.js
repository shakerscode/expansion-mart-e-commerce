import React from 'react';
import shopping from '../../assets/Banner/banner-5.png' 

const ShopBanner = () => { 
    return (
        <div className='shop-banner my-10 relative rounded-lg'>
            <h1 className='md:text-3xl text-lg flex justify-between items-center absolute font-bold left-3 top-3 text-white px-5 py-1 bg-primary md:py-2 md:px-3 rounded-full'>Shop <div className='flex justify-center items-center'></div></h1>
            <img src={shopping} alt="" className='z-10 md:w-40 w-20 absolute md:right-3 right-1 bottom-0 md:bottom-0' />
            <div className='flex flex-col justify-center items-center h-36 md:h-28'>
                <h4 className='text-md md:text-3xl text-secondary font-semibold'>Shop The Best Quality Products From Us</h4>
                <p className='text-primary text-[12px] z-20 md:text-xl font-semibold'>Get Up To 50% Discount and Cashback </p>
            </div>

        </div>
    );
};

export default ShopBanner;