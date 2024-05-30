import React, { useEffect, useRef, useState } from 'react'
import Container from '../../layout/Conatiner'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";
import CategoryDropDown from '../../layout/CategoryDropDown';
import Cart from '../../layout/Cart';

const Headers = () => {
    const CategoryRef = useRef();
    const userRef = useRef();
    const cartRef = useRef();
    const [categoryShow, setCategoryShow] = useState(false);
    const [userShow, setUserShow] = useState(false);
    const [cartShow, setCartShow] = useState(false);

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (CategoryRef.current.contains(e.target)) {
                setCategoryShow(true)
            } else {
                setCategoryShow(false);
            }
            if (userRef.current.contains(e.target)) {
                setUserShow(true)
            } else {
                setUserShow(false);
            }
            if (cartRef.current.contains(e.target)) {
                setCartShow(true)
            } else {
                setCartShow(false);
            }
        })
    }, []);

    return (
        <header className=' py-6 bg-[#F5F5F3]'>
            <Container>
                <div className=' flex justify-between items-center'>
                    <div className='w-3/12 flex gap-2 relative' ref={CategoryRef}>
                        <div >
                            <HiMiniBars3BottomLeft className='text-[25px] text-black' />
                        </div>
                        <h2 className=' text-primary text-[14px] font-DMSans'>Shop by Category</h2>
                        <div className=' absolute top-8 z-50'>
                            {
                                categoryShow && <CategoryDropDown />
                            }
                        </div>
                    </div>
                    <div className='w-5/12'>
                        <div className='flex bg-white py-2 px-4'>
                            <input type="text" placeholder='Search Products' className='w-full outline-none' />
                            <FaSearch className='text-[25px] text-primary' />
                        </div>

                    </div>
                    <div className='w-3/12 flex justify-end gap-5'>
                        <div className='flex justify-end relative' ref={userRef}>
                            <FaUser className='text-[20px] text-primary' />
                            <IoMdArrowDropdown className='text-[25px] text-primary' />
                            {
                                userShow
                                &&
                                <div className=' text-center bg-white w-[200px] absolute top-7 z-50'>
                                    <h2 className=' font-DMSans font-bold text-[14px] py-3 capitalize
                                     hover:bg-black hover:text-white duration-300'>my account</h2>
                                    <h2 className=' font-DMSans font-bold text-[14px] py-3 capitalize
                                     hover:bg-black hover:text-white duration-300'>logout</h2>
                                </div>
                            }
                        </div>
                        <div className=' relative' ref={cartRef}>
                            <MdLocalGroceryStore className='text-[25px] text-primary' />
                            {cartShow
                                &&
                                <div className=' absolute top-6 right-5 z-50'>
                                    <Cart />
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </Container>
        </header>
    )
}

export default Headers