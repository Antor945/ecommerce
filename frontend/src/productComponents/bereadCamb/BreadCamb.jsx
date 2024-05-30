import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BreadCamb = () => {
    return (
        <div className=' flex items-center gap-1 text-[12px] text-secoundery font-DMSans font-semibold'>
            <Link to={'/home'}>
                <h2>
                    Home
                </h2>
            </Link>
            <MdKeyboardArrowRight />
            <h2>{window.location.pathname.split('/')[1]}</h2>
        </div>
    )
}

export default BreadCamb