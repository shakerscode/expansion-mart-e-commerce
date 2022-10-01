import React from 'react';
import { useState } from 'react';
import { MdFilterListAlt } from 'react-icons/md';
import { ShopProducts, FilterData } from '../exporter'

const MainShop = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                <div
                    onClick={() => setShowMenu(!showMenu)}
                    className='flex justify-center items-center gap-1 w-44 bg-primary h-10 text-white font-semibold text-center rounded-lg md:hidden'>
                    <MdFilterListAlt />
                    <p>Filter Menu</p>
                </div>
                <div className={`${showMenu ? 'filter-menu' : 'hidden md:block'} making-sticky border-r border-r-light px-2`}>

                    <FilterData setShowMenu={setShowMenu} />
                </div>
                <div className='h-full col-span-2'>
                    <ShopProducts />
                </div>
            </div>
        </div>
    );
};

export default MainShop;