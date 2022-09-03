import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoCloseCircleOutline  } from 'react-icons/io5'
import {  IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { BsJustifyLeft, BsSearch } from 'react-icons/bs'
import CatList from '../Re-UseableComp/CatList';

const Header = () => {
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)
    const [showUser, setShowUser] = useState(false)
    const menus = [
        { m: 'Home', link: '/' },
        { m: 'Product', link: '/' },
        { m: 'Blog', link: '/' },
        { m: 'Contact', link: '/' },
        { m: 'About', link: '/' },
    ]
    const categories = [
        { catName: " Women's Fashion" },
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
    const authList = [
        {aL: 'Login'},
        {aL: 'Register'},
        {aL: 'Profile'}
    ]


    
    const handleCat = (list) => {
        setShow(false);
        setShowUser(false);
        console.log(list);
    } 

    return (
        <header>
            <div className='bg-primary py-2 text-center'>
                <p className='text-white text-sm md:text-md'>Get <b>45%</b> off on your first order. <a href="/" className='underline font-semibold'>Buy now!</a></p>
            </div>
            <div className={`flex justify-between items-center md:px-14 px-3 md:py-4 py-2 h-16 md:h-auto ${open ? 'shadow-none' : 'shadow-md'} md:shadow-none`}>
                {open
                    ?
                    <IoCloseCircleOutline 
                    onClick={() => setOpen(false)}
                    className='md:hidden text-2xl text-primary'/>
                    :
                    <BsJustifyLeft
                        onClick={() => setOpen(!open)}
                        className='md:hidden text-2xl hover:text-primary' />}
                <h1 className='md:text-4xl text-2xl font-bold text-primary'>Expansion<span className='text-secondary'>Mart</span></h1>
                <div className=' hidden md:flex'>
                    <input
                        type="search"
                        placeholder='Search products...'
                        className='focus:outline-none border border-gray w-96 px-3 rounded-l-full' />
                    <button><BsSearch className='bg-secondary text-white w-14 h-14 p-4 rounded-r-full text-xl' /></button>
                </div>
                <div className='flex items-center gap-5 text-2xl text-center '>
                    <button className='border-r border-gray pr-3 border-h-5 text-black hover:text-secondary transition-all ease-in-out duration-200 md:block hidden'><FiPhoneCall /></button>
                    <button className='border-r border-gray pr-3 text-black hover:text-secondary transition-all ease-in-out duration-200 md:block hidden relative'><AiOutlineHeart /> 
                    <div className='absolute top-[-22px] right-2  text-white '>
                         <span className='text-[15px] font-semibold text-center bg-secondary px-1 rounded-full'>0</span>
                    </div>
                    </button>
                    <button className='border-r border-gray pr-3 text-black hover:text-secondary transition-all ease-in-out duration-200 md:block hidden relative'><HiOutlineShoppingBag />
                    <div className='absolute top-[-22px] right-2 text-white '>
                         <span className='text-[15px] font-semibold text-center bg-secondary px-1 rounded-full'>0</span>
                    </div>
                    </button>
                    <button className='md:pr-3 text-black hover:text-secondary transition-all ease-in-out duration-200 relative'><AiOutlineUser onClick={() => setShowUser(!showUser)} /> 
                    </button> 
                    {
                        showUser && <div className='absolute flex flex-col text-md bg-white shadow-lg w-[200px] rounded-lg top-24 md:right-14 right-5 z-10'>
                            <ul className='text-sm text-[16px] py-2'>
                            {
                                authList.map((l, i) => <CatList key={i} list={l?.aL} handleCat={handleCat}/>)
                            }
                            </ul>
                        </div>
                    }
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:px-14 px-3 py-2 my-2 md:my-0'>
                <button
                    onClick={() => setShow(!show)} 
                     className='flex justify-center items-center gap-4  md:text-xl font-semibold bg-primary md:w-52 w-full rounded-lg text-white px-4 py-2 hover:bg-secondary transition-all ease-in-out duration-300 relative'>{ show ? <IoMdArrowDropup className='md:block hidden text-2xl' /> : <IoMdArrowDropdown className='md:block hidden text-2xl' />} All Categories</button>
                <ul className={`flex flex-col bg-white w-full md:w-auto shadow-lg md:shadow-none py-4 gap-3 z-20 md:z-auto md:flex-row md:justify-end items-center md:gap-8 absolute md:static transition-all duration-500 ease-in-out  left-0   ${open ? 'top-24 opacity-100' : 'top-[-250px] left-0 opacity-0 md-opacity-100'}`}>
                    {
                        menus.map((menu, i) =>
                            <li
                                key={i}
                                // onClick={() => navigate(`${menu.link}`)}
                                className='text-lg cursor-pointer hover:text-secondary transition-all ease-in duration-150'>{menu?.m}</li>)
                    }
                </ul>
            </div> 
            {
                show &&
                <div className='bg-white shadow-lg py-3 w-60 h-fit-content px-2 absolute left-14 top-38 md:top-48 rounded-lg transition-transform ease-in duration-500 z-10'>
                    <ul className='flex flex-col gap-2'>
                        {
                            categories?.map((cat, i) => <CatList key={i} list={cat.catName} handleCat={handleCat} />)
                        }
                    </ul>
                </div>
            }
        </header>
    );
};


export default Header;