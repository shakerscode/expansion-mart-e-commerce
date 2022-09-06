import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

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
        <div className='w-[90%] my-8 mx-auto'>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary md:text-3xl text-xl font-bold py-3'>Top Categories</h3>
                <span className='flex items-center gap-2 md:text-md text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <div className='grid grid-cols-6 gap-2 cursor-pointer  p-3 rounded-lg shadow-md bg-light'>
                {
                    categories?.map((cat, i) =>
                        <div 
                        key={i} 
                        // onClick={()=> handleCat(cat.catTittle)}
                        className='px-4 py-6 flex items-center rounded-lg hover:bg-secondary hover:text-white transition-all duration-500 ease-in-out gap-4 shadow'>
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