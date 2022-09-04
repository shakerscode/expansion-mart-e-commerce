import React from 'react';
import heroOne from '../../../assets/Slider/hero-1.png'
import sideHeroOne from '../../../assets/Side-Hero/side-hero-1.jpg'
import sideHeroTwo from '../../../assets/Side-Hero/side=hero-2.jpg'

const Hero = () => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className='col-span-2'>
                <img src={heroOne} alt="heroOne" className='w-full h-[550px] rounded-lg'/>
            </div>
            <div className='grid grid-rows-2 gap-3'>
                <div className=''>
                <img src={sideHeroOne} alt="sideHeroOne" className='w-full rounded-lg'/>
                </div>
                <div className=''>
                <img src={sideHeroTwo} alt="sideHeroTwo" className='w-full rounded-lg'/>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;