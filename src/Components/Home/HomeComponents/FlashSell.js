import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Timer from './Timer';

const FlashSell = () => { 

    const categories = [
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
        { catTittle: 'categories', catIcon: 'FiHeadphones' },
    ]
    return (
        <div className='my-8 s'>
            <h3 className='text-primary md:text-3xl text-xl font-bold py-3'>Flash Sell</h3>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-5'>
                    <p className='text-secondary font-semibold text-lg'>On Sale Now</p>
                    <p className='text-primary'>Ending in</p> 
                    <Timer />
                </div>
                <span className='flex items-center gap-2 md:text-md text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <div className='grid grid-cols-6 gap-2 cursor-pointer p-3 rounded-lg'>
                {
                    categories?.map((cat, i) =>
                        <div
                            key={i}
                            // onClick={()=> handleCat(cat.catTittle)}
                            className='px-4 py-6  rounded-lg hover:bg-secondary hover:text-white transition-all duration-500 ease-in-out gap-4 shadow'>
                            <p>{cat.catIcon}</p>
                            <h4 className='text-xl'>{cat.catTittle}</h4>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default FlashSell;