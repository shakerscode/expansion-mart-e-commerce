import React from 'react';
import { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi'
 import Card from '../../Re-UseableComp/Card';

const UserProducts = () => {
     
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json').then(res => res.json()).then(data => setProducts(data))
    }, []) 
    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center bg-light p-3 rounded-lg'>
            <h3 className='text-primary md:text-3xl text-xl font-bold py-1'>Spacial For You</h3>
                 
                <span className='flex items-center gap-2 md:text-lg text-sm text-secondary font-semibold cursor-pointer'>See All <FiArrowRight /> </span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-2 p-2 rounded-lg'>
                {
                    products?.map((product, i) => <Card key={i} product={product}/> 
                    )
                }

            </div>
            <div className='mt-4 md:mt-5 flex justify-center items-center'>
                <button className='flex items-center gap-3 md:text-xl text-md bg-primary text-white px-3 py-2 rounded-lg'>Shop More <HiOutlineShoppingBag/></button>
            </div>
        </div>
    );
};

export default UserProducts;