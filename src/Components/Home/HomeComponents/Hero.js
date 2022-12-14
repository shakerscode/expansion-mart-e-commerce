import React from 'react';
import { Slider, Button } from '../../exporter';
import heroOne from '../../../assets/Slider/hero-1.png'
import heroTwo from '../../../assets/Slider/hero-2.jpg'
import heroThree from '../../../assets/Slider/hero-3.jpg'

const Hero = () => {
    const sliderInfo = [
        { tittle: 'Get Amazing Fashion Products', subTittle: 'Choose the best outfit for yourself.', offer: '20%', image: heroTwo },
        { tittle: 'Feel the sports thrill like real', subTittle: 'Watch world cup football in super LED Tv.', offer: '35%', image: heroThree },
        { tittle: 'get YOUR DAILY NEEDS', subTittle: 'Choose healthy foods for you.', offer: '25%', image: heroOne },
    ]

    return (
        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
            <div className='col-span-2'>
                <Slider slider={sliderInfo} />
            </div>
            <div className='md:grid md:grid-rows-2 grid-rows-1 col-span-2 md:col-auto gap-3'>
                <div
                    className='bg-image-one shadow flex flex-col gap-1 justify-center items-start pl-3 md:py-4 rounded-lg'>
                    <p className='text-secondary'><b className='md:text-xl'>45% </b>OFF</p>
                    <h2 className='md:text-3xl text-xl font-bold text-primary'>Watch Collection</h2>
                    <h5 className='text-black md:text-sm text-[12px] bg-light md:px-3 px-2 py-1 rounded-full'>Electric Market</h5>
                    <p className='text-sm'>Start your daily shopping <br /> with some</p>
                    <Button>Shope Now</Button>
                </div>
                <div
                    className='bg-image-one shadow flex flex-col gap-1 justify-center items-start pl-3 md:py-4 rounded-lg md:mt-0 mt-3'>
                    <p className='text-secondary'><b className='md:text-xl'>25% </b>OFF</p>
                    <h2 className='md:text-3xl text-xl font-bold text-primary'>Watch Collection</h2>
                    <h5 className='text-black md:text-sm text-[12px] bg-light md:px-3 px-2 py-1 rounded-full'>Electric Market</h5>
                    <p className='text-sm'>Start your daily shopping <br /> with some</p>
                    <Button>Shope Now</Button>
                </div>
                <div
                    className='bg-image-one shadow flex flex-col gap-1 justify-center items-start pl-3 md:py-4 mt-3 md:mt-0 rounded-lg'>
                    <p className='text-secondary'><b className='md:text-xl'>35% </b>OFF</p>
                    <h2 className='md:text-3xl text-xl font-bold text-primary'>Watch Collection</h2>
                    <h5 className='text-black md:text-sm text-[12px] bg-light md:px-3 px-2 py-1 rounded-full'>Electric Market</h5>
                    <p className='text-sm'>Start your daily shopping <br /> with some</p>
                    <Button>Shope Now</Button>
                </div>
            </div>

        </div>
    );
};

export default Hero;