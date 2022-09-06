import React  from 'react'; 
 import { Slider } from '../../exporter';
 import { BsArrowRight } from 'react-icons/bs'


const Hero = () => {
   
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
            <div className='col-span-2'>
                <Slider/>
            </div>
            <div className='md:grid md:grid-rows-2 grid-rows-1 col-span-2 md:col-auto gap-3'>
                <div 
                className='bg-image-one shadow flex flex-col gap-1 justify-center items-start pl-3 md:py-4 rounded-lg'> 
                    <p className='text-secondary'><b className='md:text-xl'>45% </b>OFF</p>
                   <h2 className='md:text-3xl text-xl font-bold text-primary'>Watch Collection</h2>
                    <h5 className='text-black md:text-sm text-[12px] bg-light md:px-3 px-2 py-1 rounded-full'>Electric Market</h5>
                    <p className='text-sm'>Start your daily shopping <br /> with some</p>
                    <button className='bg-red md:px-4 px-3 text-sm py-2 text-white rounded-full flex gap-2 items-center hover:translate-x-2 transition-all duration-500 ease-in-out'>Shop Now <BsArrowRight/></button> 
                </div>  
                <div 
                className='bg-image-one shadow flex flex-col gap-1 justify-center items-start pl-3 md:py-4 rounded-lg md:mt-0 mt-3'> 
                    <p className='text-secondary'><b className='md:text-xl'>25% </b>OFF</p>
                   <h2 className='md:text-3xl text-xl font-bold text-primary'>Watch Collection</h2>
                    <h5 className='text-black md:text-sm text-[12px] bg-light md:px-3 px-2 py-1 rounded-full'>Electric Market</h5>
                    <p className='text-sm'>Start your daily shopping <br /> with some</p>
                    <button className='bg-red md:px-4 px-3 text-sm py-2 text-white rounded-full flex gap-2 items-center hover:translate-x-2 transition-all duration-500 ease-in-out'>Shop Now <BsArrowRight/></button> 
                </div>  
                <div 
                className='bg-image-one shadow flex flex-col gap-1 justify-center items-start pl-3 md:py-4 mt-3 md:mt-0 rounded-lg'> 
                    <p className='text-secondary'><b className='md:text-xl'>35% </b>OFF</p>
                   <h2 className='md:text-3xl text-xl font-bold text-primary'>Watch Collection</h2>
                    <h5 className='text-black md:text-sm text-[12px] bg-light md:px-3 px-2 py-1 rounded-full'>Electric Market</h5>
                    <p className='text-sm'>Start your daily shopping <br /> with some</p>
                    <button className='bg-red md:px-4 px-3 text-sm py-2 text-white rounded-full flex gap-2 items-center hover:translate-x-2 transition-all duration-500 ease-in-out'>Shop Now <BsArrowRight/></button> 
                </div>  
            </div>
            
        </div>
    );
};

export default Hero;