import React from 'react';
 import {FiPhoneCall} from 'react-icons/fi'
import {AiOutlineHeart, AiOutlineUser} from 'react-icons/ai'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {BsJustifyLeft, BsSearch} from 'react-icons/bs'
import {BiChevronDown} from 'react-icons/bi'

const Header = () => {
    const menus = [
        {m: 'Home'},
        {m: 'Product'},
        {m: 'Blog'},
        {m: 'Contact'},
        {m: 'About'}, 
    ] 
    return (
        <header>
            <div className='bg-primary py-1 text-center'>
                <p className='text-white'>Get <b>45%</b> off on your first order. <a href="/" className='underline font-semibold'>Buy now!</a></p>
            </div>
            <div className='flex justify-between items-center px-14 py-4'>
                <h1 className='text-4xl font-bold text-primary'>Expansion<span className='text-secondary'>Mart</span></h1>
                <div className='flex'>
                    <input 
                    type="search" 
                    placeholder='Search products...'
                    className='focus:outline-none border border-gray w-96 px-3 rounded-l-full'/>
                    <button><BsSearch className='bg-secondary text-white w-14 h-14 p-4 rounded-r-full text-xl'/></button>
                </div>
                <div className='flex items-center gap-5 text-2xl text-center'>
                    <button className='border-r border-gray pr-3 border-h-5 text-black hover:text-secondary transition-all ease-in-out duration-200'><FiPhoneCall/></button>
                    <button className='border-r border-gray pr-3 text-black hover:text-secondary transition-all ease-in-out duration-200'><AiOutlineHeart/></button>
                    <button className='border-r border-gray pr-3 text-black hover:text-secondary transition-all ease-in-out duration-200'><HiOutlineShoppingBag/></button>
                    <button className=' pr-3 text-black hover:text-secondary transition-all ease-in-out duration-200'><AiOutlineUser/> </button>   
                </div>

            </div>
            <div className='grid grid-cols-2 gap-5 px-14 py-2'>
                <button className='flex items-center gap-4 text-xl font-semibold bg-primary w-52 rounded-lg text-white px-4 py-2 hover:bg-secondary transition-all ease-in-out duration-300'><BsJustifyLeft/> All Categories</button>
                <nav>
                    <ul className='flex justify-end items-center gap-8'>
                        {
                            menus.map(menu => <li className='flex items-center gap-1 text-lg cursor-pointer'>{menu?.m}</li>)
                        }
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;