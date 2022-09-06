import React  from 'react';

import sideHeroOne from '../../../assets/Side-Hero/side-hero-1.jpg'
import sideHeroTwo from '../../../assets/Side-Hero/side=hero-2.jpg'
import { Slider } from '../../exporter';
 

const Hero = () => {
   
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
            <div className='col-span-2'>
                <Slider/>
            </div>
            <div className='md:grid md:grid-rows-2 flex col-span-2 md:col-auto gap-3'>
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