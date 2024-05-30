import React, { useState } from 'react'
import Conatiner from '../../layout/Conatiner'
import navlogo from '../../assets/navlogo.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [active, setActive] = useState('home');

    const handleClick = (item) => {
        setActive(item);
    };


    return (
        <nav id='NavBar'>
            <Conatiner>
                <div className='flex items-center py-8'>
                    <div className='w-2/12'>
                        <picture>
                            <img src={navlogo} alt="" />
                        </picture>
                    </div>
                    <div className='w-8/12'>
                        <ul className='flex gap-10 justify-center text-[14px] font-DMSans text-secoundery'>
                            <Link to={'/home'}>
                                <li onClick={() => handleClick('home')}
                                 className={`text-primary ${active ==='home'?"font-bold text-primary" :''}`}>
                                    Home
                                </li>
                            </Link>
                            <Link to={'/product'}>
                                <li onClick={() => handleClick('shope')} 
                                className={`text-primary ${active ==='shope'?"font-bold text-primary" :''}`}>
                                    Shope
                                </li>
                            </Link>
                            <li onClick={() => handleClick('about')} 
                            className={`text-primary ${active ==='about'?"font-bold text-primary" :''}`}>
                                About
                            </li>
                            <li onClick={() => handleClick('contact')} 
                            className={`text-primary ${active ==='contact'?"font-bold text-primary" :''}`}>
                                Contact
                            </li>
                            <li onClick={() => handleClick('journal')} 
                            className={`text-primary ${active ==='journal'?"font-bold text-primary" :''}`}>
                                Journal
                            </li>
                        </ul>
                    </div>
                </div>
            </Conatiner>
        </nav>
    )
}

export default NavBar