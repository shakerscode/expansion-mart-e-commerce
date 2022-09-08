import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Timer from './Timer';
import P1 from '../../../assets/Products/p1.png'

const FlashSell = () => {

    const categories = [
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, image: P1 },
        { _id: 1, title: 'Redmi 10c - 4GB RAM / 64GB ROM - 5000mAh Battery', price: '14,388', perviousPrice: '14,999', off: '4%', review: 5, image: P1 } 
    ]
    return (
        <div className='my-8 s'>
            <h3 className='text-primary md:text-3xl text-xl font-bold py-3'>Flash Sell</h3>
            <div className='flex justify-between items-center bg-light p-3 rounded-lg'>
                <div className='flex justify-center items-center gap-5'>
                    <p className='text-secondary font-semibold text-lg'>On Sale Now</p>
                    <p className='text-primary'>Ending in</p>
                    <Timer />
                </div>
                <span className='flex items-center gap-2 md:text-md text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-2 cursor-pointer p-2 rounded-lg'>
                {
                    categories?.map((cat, i) =>
                        <div
                            key={i}
                            // onClick={()=> handleCat(cat._id)}
                            className='px-3 py-2 hover:shadow-lg  rounded-lg transition-all duration-500 ease-in-out gap-4  bg-white shadow'>
                            <img src={cat?.image} alt="" className='h-44 mx-auto pb-2' />
                            <h4>{cat?.title.slice(0, 40)}...</h4>
                            <p>{cat.price}</p>
                            <div className='mb-3'>
                                <span className='text-gray mr-2'>{cat?.perviousPrice}</span>
                                <span>-{cat.off}</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <button className='bg-secondary text-white p-3 rounded-full flex justify-end items-center my-2 active:shadow-lg transition-all ease-in-out duration-500 hover:translate-x-1'><HiOutlineShoppingBag className='text-lg font-semibold' /></button>
                                <button className='bg-secondary text-white p-3 rounded-full flex justify-end items-center my-2 active:shadow-lg transition-all ease-in-out duration-500 hover:translate-x-1'><HiOutlineShoppingBag className='text-lg font-semibold' /></button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default FlashSell;