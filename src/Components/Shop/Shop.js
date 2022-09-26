import React from 'react'; 
import{MainShop, Banner} from '../exporter'
import shopping from '../../assets/Banner/banner-5.png' 

 
const Shop = () => {
     
    return (
        <div className='md:px-14 px-4'>
            <Banner  
            identity={'Shop'}
            Shop={true}
            title={'Shop The Best Quality Products From Us'}
            subTitle={'Get Up To 50% Discount and Cashback'}
            sideImg={shopping}
            />
            <div>
                
            </div>
            <MainShop/>
        </div>
    );
};

export default Shop;