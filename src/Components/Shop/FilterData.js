import React from 'react';
import { useState } from 'react';
import {AiOutlineDownCircle, AiOutlineUpCircle} from 'react-icons/ai'

const FilterData = () => {
    const [check, setCheck] = useState('')
    const [down, setDown] = useState(false)
    const categories = [
        { catName: "Women's Fashion" },
        { catName: "Men's Fashion" },
        { catName: "Watches, Bags, Jewelry" },
        { catName: "Groceries & Pets" },
        { catName: "Electronic Devices" },
        { catName: "TV & Home Appliances" },
        { catName: "Babies & Toys" },
        { catName: "Vegetables & Fruit" },
        { catName: "Meats & Seafood" },
        { catName: "Frozen Foods" },
        { catName: "Dairy" }
    ]
    const handleChange = (e) => {
        setCheck(e.target.value);
    } 
    return (
        <div>
            <div className='shadow-md p-5 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold text-primary mb-3 pb-2 border-b border-b-primary'>Filter by category</h2>
                    {
                    down ?
                    <AiOutlineUpCircle onClick={()=> setDown(false)} className='text-2xl text-primary mb-3 cursor-pointer'/>
                    :
                    <AiOutlineDownCircle onClick={()=> setDown(!down)} className='text-2xl text-primary mb-3 cursor-pointer'/>
                    }
                </div>
                <div className={`transition-all ease-in duration-700' ${down ? 'block'  : 'hidden'}`}>

                    <ul className='flex flex-col'>
                        {
                            categories?.map((cat, i) => <li key={i} className='cursor-pointer'><input onClick={handleChange} className='mr-3 cursor-pointer' type="checkbox" name='checkbox' value={cat?.catName} />{cat?.catName}</li>)
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilterData;