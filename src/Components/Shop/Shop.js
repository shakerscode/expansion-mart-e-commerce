import React from 'react'; 
import{MainShop, ShopBanner} from '../exporter'
 
const Shop = () => {
    return (
        <div className='md:px-14 px-4'>
            <ShopBanner/>
            <div>
                
            </div>
            <MainShop/>
        </div>
    );
};

export default Shop;