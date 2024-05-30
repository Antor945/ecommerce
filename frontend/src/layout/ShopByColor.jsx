import React from 'react'
import { IoMdArrowDropup } from "react-icons/io";


const ShopByColor = () => {
    return (
        <div>
            <div className=' flex justify-between items-center mt-6'>
                <h2 className=' font-DMSans text-xl font-bold text-primary '>Shop by Color</h2>
                <IoMdArrowDropup className=' text-xl text-primary'/>
            </div>
            <div>
                <div className=' flex items-center gap-x-5 mt-5 border-b-2 pb-4'>
                    <div className='w-3 h-3 bg-red-500 rounded-full' />
                    <h2 className=' text-base font-DMSans text-primary'>color 1</h2>
                </div>
                <div className=' flex items-center gap-x-5 mt-5 border-b-2 pb-4'>
                    <div className='w-3 h-3 bg-red-500 rounded-full' />
                    <h2 className=' text-base font-DMSans text-primary'>color 1</h2>
                </div>
                <div className=' flex items-center gap-x-5 mt-5 border-b-2 pb-4'>
                    <div className='w-3 h-3 bg-red-500 rounded-full' />
                    <h2 className=' text-base font-DMSans text-primary'>color 1</h2>
                </div>
                <div className=' flex items-center gap-x-5 mt-5 border-b-2 pb-4'>
                    <div className='w-3 h-3 bg-red-500 rounded-full' />
                    <h2 className=' text-base font-DMSans text-primary'>color 1</h2>
                </div>
                <div className=' flex items-center gap-x-5 mt-5 border-b-2 pb-4'>
                    <div className='w-3 h-3 bg-red-500 rounded-full' />
                    <h2 className=' text-base font-DMSans text-primary'>color 1</h2>
                </div>
            </div>
        </div>
    )
}

export default ShopByColor