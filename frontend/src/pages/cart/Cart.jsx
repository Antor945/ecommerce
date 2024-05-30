import React, { useState } from 'react'
import Conatiner from '../../layout/Conatiner'
import BreadCamb from '../../productComponents/bereadCamb/BreadCamb'
import { ImCross } from "react-icons/im";

const Cart = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <Conatiner>
                <div className=' mt-20 mb-28'>
                    <h2 className=' text-3xl font-DMSans font-bold text-primary mb-3'>Cart</h2>
                    <BreadCamb />
                </div>

                <div className=' flex py-4 px-5 bg-[#F5F5F3]'>
                    <div className='w-3/12'>
                        <h2 className=' text-base font-bold font-DMSans text-primary'>Product</h2>
                    </div>
                    <div className='w-3/12'>
                        <h2 className=' text-base font-bold font-DMSans text-primary'> Price</h2>
                    </div>
                    <div className='w-3/12'>
                        <h2 className=' text-base font-bold font-DMSans text-primary'> Quantity</h2>
                    </div>
                    <div className='w-3/12'>
                        <h2 className=' text-base font-bold font-DMSans text-primary'>Total</h2>
                    </div>
                </div>

                <div className=' flex items-center py-4 px-5 border-b-2'>
                    <div className='w-3/12'>
                        <div className=' flex items-center gap-x-3'>
                            <ImCross />
                            <picture>
                                <img className=' w-20 ' src="https://i.ibb.co/T1rnjYt/Image-4.png" alt="" />
                            </picture>
                            <h2 className=' text-secoundery font-bold font-DMSans text-base'>
                                Product name
                            </h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <h2 className=' text-base font-bold font-DMSans text-primary'>$44.00</h2>
                    </div>
                    <div className='w-3/12'>
                        <div className="flex w-24 gap-x-4 text-xl font-bold text-primary font-DMSans border-2 px-4 py-1">
                            <h2>-</h2><h2>1</h2><h2>+</h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <h2 className=' text-base font-bold font-DMSans text-primary'>$44.00</h2>
                    </div>
                </div>

                <div className=' flex items-center justify-between py-4 px-5 border-b-2'>
                    <div className="flex items-center gap-x-4 z-50 relative">
                        <h2 className=' text-base font-DMSans font-bold text-primary'>
                            Size
                        </h2>
                        <button onClick={toggleDropdown} className="text-white border-2 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            <svg className={`w-2.5 h-2.5 ms-3 text-black ${isDropdownOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <h2 className=' text-base font-DMSans font-bold text-primary'>
                            Apply coupon
                        </h2>
                        {isDropdownOpen && (
                            <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 top-8">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <button className="block px-3  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => console.log("Dashboard clicked")}>M</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <h2 className=' text-base font-DMSans font-bold text-primary'>
                        Update cart
                    </h2>
                </div>

                <div className=' flex justify-end '>
                    <div className=' w-4/12'>
                        <h2 className=' text-base font-DMSans font-bold text-primary'>
                            Update cart
                        </h2>
                        <button className='ml-auto '>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </Conatiner>
        </div>
    )
}

export default Cart