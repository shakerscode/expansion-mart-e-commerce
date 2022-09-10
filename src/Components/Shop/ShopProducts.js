import React, { useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Card from '../Re-UseableComp/Card';

const ShopProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setProducts(data))
    }, [])
    return (
        <div className=''>
            <div className='flex items-center gap-3'>
                <h6 className='text-md'>Short By:</h6>
                <select name="" id="" className='w-44 border-2 border-gray py-1 px-3 rounded-lg my-5'>
                    <option value="">All</option>
                    <option value="">Most Popular</option>
                    <option value="">Most Reviewed</option>
                </select>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 p-2 rounded-lg'>
                {
                    products?.map((product, i) => <Card key={i} product={product} />
                    )
                }

            </div>
            <div className='mt-4 md:mt-5 flex justify-center items-center'>
                <button className='flex items-center gap-3 md:text-xl text-md bg-primary text-white px-3 py-2 rounded-lg'>Shop More <HiOutlineShoppingBag /></button>
            </div>
        </div>
    );
};

export default ShopProducts;