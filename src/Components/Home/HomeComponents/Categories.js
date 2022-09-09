import React from 'react';
import { FiHeadphones, FiArrowRight } from 'react-icons/fi';
import SwiperSlider from './SwiperSlider';
import {
    Bike, Female, Ipad, Laptop, Men, Bottle, TV, Mobile} from '../../exporter'

const Categories = () => {
    const categories = [
        { catTittle: 'Bike', image: Bike },
        { catTittle: "Female's Fashion", image: Female },
        { catTittle: 'Ipad', image: Ipad },
        { catTittle: 'Laptop', image: Laptop },
        { catTittle: "Male's Fashion", image: Men },
        { catTittle: 'Bike', image: Bike },
        { catTittle: 'Bottle', image: Bottle },
        { catTittle: 'Smart TV', image: TV },
        { catTittle: 'Mobile', image: Mobile },
        { catTittle: 'Ipad', image: Ipad },
        { catTittle: 'Bike', image: Bike },
        { catTittle: 'Laptop', image: Laptop },
    ]

    const handleCat = (cat) => {
        console.log(cat);
    }
    return (
        <div className='my-8 '>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary md:text-3xl text-xl font-bold py-3'>Top Categories</h3>
                <span className='flex items-center gap-2 md:text-md text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <SwiperSlider categories={categories} />
            <div className='md:grid hidden grid-cols-6 gap-2 p-3 border-t border-t-primary '>
                {
                    categories?.map((cat, i) =>
                        <div
                            key={i}
                            onClick={() => handleCat(cat?.catTittle)}
                            className='p-4  flex flex-col items-center rounded-lg hover:bg-white hover:translate-x-1 transition-all duration-500 ease-in-out gap-4 shadow-md hover:shadow-xl  cursor-pointer'>
                           <img src={cat?.image} alt="" className='w-14' />
                            <h4 className='text-lg text-black'>{cat?.catTittle}</h4>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Categories;