import React from 'react';
import { FiHeadphones, FiArrowRight } from 'react-icons/fi';
import SwiperSlider from './SwiperSlider';

const Categories = () => {
    const categories = [
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
        { catTittle: 'categories', catIcon: FiHeadphones },
    ]

    const handleCat = (cat) =>{
        console.log(cat);
    }
    return (
        <div className='my-8 '>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary md:text-3xl text-xl font-bold py-3'>Top Categories</h3>
                <span className='flex items-center gap-2 md:text-md text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <SwiperSlider categories={categories}/>
            {/* <div className='grid grid-cols-6 gap-2 cursor-pointer  p-3 rounded-lg shadow-md bg-light'>
                {
                    categories?.map((cat, i) =>
                        <div 
                        key={i} 
                        onClick={()=> handleCat(cat.catTittle)}
                        className='px-4 py-6 flex items-center rounded-lg hover:bg-white hover:translate-x-1 transition-all duration-500 ease-in-out gap-4 shadow'>
                            <cat.catIcon className='text-2xl'/>
                            <h4 className='text-xl'>{cat.catTittle}</h4>
                        </div>
                    )
                }

            </div> */}
        </div>
    );
};

export default Categories;