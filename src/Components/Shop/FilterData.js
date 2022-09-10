import React from 'react';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import FilterHeader from '../Re-UseableComp/FilterHeader';

const FilterData = ({setShowMenu}) => {
    const [check, setCheck] = useState('')
    const [downCat, setDownCat] = useState(true)
    const [downPrice, setDownPrice] = useState(true)
    const [downBrand, setDownBrand] = useState(true)
    const [downReview, setDownReview] = useState(true)
    const [price, setPrice] = useState(0)
    console.log(check);
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
    const brands = [
        { brandName: "Women's Fashion" },
        { brandName: "Men's Fashion" },
        { brandName: "Watches, Bags, Jewelry" },
        { brandName: "Groceries & Pets" },
        { brandName: "Electronic Devices" }
    ]
    const reviews = [
        { review: 1 },
        { review: 2 },
        { review: 3 },
        { review: 4 },
        { review: 5 }
    ]
    const handleChange = (e) => {
        setCheck(e.target.value);
    }
    return (
        <div>
           <div 
            onClick={() => setShowMenu(false)}
            className='flex items-center gap-3 font-semibold text-2xl py-5 md:hidden'>
                <BiArrowBack/>
                <p>Back</p>
            </div>
            <div className='shadow-md p-5 rounded-lg'>
                <FilterHeader props={'Filter by category'} setDown={setDownCat} down={downCat} />
                <div className={`transition-all ease-in duration-700' ${downCat ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col'>
                        {
                            categories?.map((cat, i) => <li key={i} className='cursor-pointer'><input onClick={handleChange} className='mr-3 cursor-pointer' type="checkbox" name='checkbox' value={cat?.catName} />{cat?.catName}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className='shadow-md p-5 rounded-lg mt-5'>
                <FilterHeader props={'Filter by Price'} setDown={setDownPrice} down={downPrice} />
                <div className={`transition-all ease-in duration-700' ${downPrice ? 'block' : 'hidden'}`}>
                    <div className='flex justify-between items-center'>
                        <input className='w-full outline-none py-2 px-4 rounded-lg border border-gray' type="number" name="" id="" value={price} />
                    </div>
                    <input
                        min={0}
                        max={15000}
                        type="range"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='mt-3 w-full text-primary' />
                </div>
            </div>
            <div className='shadow-md p-5 rounded-lg mt-5'>
                <FilterHeader props={'Filter by Brand'} setDown={setDownBrand} down={downBrand} />
                <div className={`transition-all ease-in duration-700' ${downBrand ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col'>
                        {
                            brands?.map((brand, i) => <li key={i} className='cursor-pointer'><input onClick={handleChange} className='mr-3 cursor-pointer' type="checkbox" name='checkbox' value={brand?.brandName} />{brand?.brandName}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className='shadow-md p-5 rounded-lg mt-5'>
                <FilterHeader props={'Filter by Review'} setDown={setDownReview} down={downReview} />
                <div className={`transition-all ease-in duration-700' ${downReview ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col'>
                        {
                            reviews?.map((review, i) => <li key={i} className='cursor-pointer flex'><input onClick={handleChange} className='mr-3 cursor-pointer' type="checkbox" name='checkbox' value={review?.review} />
                            {
                                review?.review === 1 ? <span className='flex text-secondary'><AiFillStar/></span> 
                                :
                                review?.review === 2 ? <span className='flex text-secondary'><AiFillStar/><AiFillStar/></span> 
                                :
                                review?.review === 3 ? <span className='flex text-secondary'><AiFillStar/><AiFillStar/><AiFillStar/></span> 
                                :
                                review?.review === 4 ? <span className='flex text-secondary'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span> 
                                :
                                review?.review === 5 && <span className='flex text-secondary'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span> 
                            }</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilterData;