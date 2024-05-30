import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const cart = () => {

    const cartData = useSelector(state => state.cartInfo);
    console.log(cartData);
  

    return (
        cartData.map((item) => (
            <div className=' w-[358px] bg-white border-2 border-[#bcbaba]'>
                <div className=' flex  justify-between items-center bg-[#F5F5F3] p-5'>
                    <div className='  flex justify-center items-center gap-4'>
                        <picture>
                            <img className="w-20 h-20" src={item.image} alt="" />
                        </picture>
                        <div>
                            <h2 className=' text-[14px] font-DMSans font-bold text-primary mb-2'>{item.variantName}</h2>
                            <h2 className=' text-[14px] font-DMSans font-bold text-primary'>${item.price}</h2>
                        </div>
                    </div>
                    <RxCross2 className=' text-xl' />
                </div>
                <div className='p-5'>
                    <div>
                        <h2 className=' text-[#767676] font-medium mb-3'>Price:
                            <span className=' text-base text-primary font-bold'>{item.price}</span></h2>
                    </div>
                    <div className=' flex justify-between'>
                        <button className=' text-base text-primary font-DMSans font-bold px-9 py-3 border-[2px]
                 border-primary hover:bg-black hover:text-white duration-300 outline-none'>View Cart</button>
                        <button className=' text-base text-primary font-DMSans font-bold px-9 py-3 border-[2px]
                 border-primary hover:bg-black hover:text-white duration-300 outline-none'>Checkout</button>
                    </div>
                </div>
            </div>
        ))

    )
}

export default cart