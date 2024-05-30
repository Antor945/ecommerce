import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';



const LeftSideBarItem = ({ subDropdown, taitle, children, color }) => {

    const [show, setShow] = useState(false);
    const [drop, setDrop] = useState(subDropdown);

    return (
        <div className='mb-5'>
            {/* <h2 className=' font-DMSans text-xl font-bold text-primary'>{taitle}</h2> */}
            {drop ?
                (
                    <div onClick={() => setShow(!show)} className='  mt-5 border-b-2 pb-4 cursor-pointer'>
                        <div className=' flex justify-between items-center'>
                            <div className=' flex items-center gap-5'>
                                {color && <span className='w-2 h-2 rounded-full' style={{ backgroundColor: color }}></span>}
                                <h2 className=' text-base font-DMSans text-primary'>{taitle}</h2>
                            </div>
                            <div>
                                <FaPlus className={`text-primary text-base
                                ${show == true ? ' duration-500' : 'rotate-180 duration-500'}`} />
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className=' flex justify-between items-center'>
                        <div className=' flex items-center gap-5'>
                            {color && <span className='w-2 h-2 rounded-full' style={{ backgroundColor: color }}></span>}
                            <h2 className=' text-base font-DMSans text-primary'>{taitle}</h2>
                        </div>
                    </div>
                )}


            {
                show
                &&
                (
                    <div>
                        <p>{children}</p>
                    </div>
                )
            }
        </div>
    )
}

export default LeftSideBarItem