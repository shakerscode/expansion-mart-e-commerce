import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { MdLocalFireDepartment } from 'react-icons/md'
import Timer from './Timer';
import P1 from '../../../assets/Products/p1.png'
import Card from '../../Re-UseableComp/Card';

const FlashSell = () => {

    const categories = [
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, quantity:85, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, quantity:100, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, quantity:60, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, quantity:98, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, quantity:100, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, quantity:0, image: P1 } 
    ]
    return (
        <div className='my-8 s'>
            <h3 className='text-primary md:text-3xl text-xl font-bold py-3 flex items-center gap-1'>Flash Sell <MdLocalFireDepartment className='text-secondary'/></h3>
            <div className='flex justify-between items-center bg-light p-3 rounded-lg'>
                <div className='flex justify-center items-center gap-5'>
                    <p className='text-secondary font-semibold md:text-lg hidden md:block'>On Sale Now</p>
                    <p className='text-primary'>Ending in</p>
                    <Timer />
                </div>
                <span className='flex items-center gap-2 md:text-lg text-sm text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-2 p-2 rounded-lg'>
                {
                    categories?.map((cat, i) => <Card key={i} product={cat}/> 
                    )
                }

            </div>
        </div>
    );
};

export default FlashSell;