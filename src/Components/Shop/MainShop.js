import React from 'react';
import {ShopProducts, FilterData} from '../exporter'

const MainShop = () => {
    
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
            <div className='sticky top-0 border-r border-r-light px-2'>
                <FilterData/>
            </div>
            <div className='h-full col-span-2'>
            <ShopProducts/>
            </div>
        </div>
        </div>
    );
};

export default MainShop;