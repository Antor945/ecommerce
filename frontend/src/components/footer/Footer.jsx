import React from 'react'
import Conatiner from '../../layout/Conatiner'
import footerLogo from '../../assets/navlogo.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <footer id='footer' className='py-8 bg-[#F5F5F3]'>
            <Conatiner >
                <div className=' flex '>
                    <div className='w-2/12'>
                        <header className='text-base font-DMSans text-primary font-bold mb-4'>Menu</header>
                        <ul className=' flex flex-col gap-3'>
                            <li className='text-[14px] font-DMSans text-secoundery'>Home</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Shop</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>About</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Contact</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Journal</li>
                        </ul>
                    </div>
                    <div className='w-2/12'>
                        <header className='text-base font-DMSans text-primary font-bold mb-4'>Shop</header>
                        <ul className=' flex flex-col gap-3'>
                            <li className='text-[14px] font-DMSans text-secoundery'>Category 1</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Category 2</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Category 3</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Category 4</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Category 5</li>
                        </ul>
                    </div>
                    <div className='w-2/12'>
                        <header className='text-base font-DMSans text-primary font-bold mb-4'>Help</header>
                        <ul className=' flex flex-col gap-3'>
                            <li className='text-[14px] font-DMSans text-secoundery'>Privacy Policy</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Terms & Conditions</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Special E-shop</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Shipping</li>
                            <li className='text-[14px] font-DMSans text-secoundery'>Secure Payments</li>
                        </ul>
                    </div>
                    <div className='w-3/12'>
                        <h2 className='text-base font-DMSans text-primary font-bold mb-1'>(052) 611-5711</h2>
                        <h2 className='text-base font-DMSans text-primary font-bold mb-2'>company@domain.com</h2>
                        <p className='text-base font-DMSans text-secoundery font-bold mb-2'>575 Crescent Ave. Quakertown, PA 18951</p>
                    </div>
                    <div className='w-3/12'>
                        <picture>
                            <img src={footerLogo} alt="" />
                        </picture>
                    </div>
                </div>
                <div className='flex justify-between py-5 mt-16'>
                    <div className=' flex gap-6 text-primary text-xl'>
                        <FaFacebookF />
                        <FaInstagram />
                        <CiLinkedin />
                    </div>
                    <div>
                        <h2 className=' text-[14px] font-DMSans text-secoundery'>
                            2020 Orebi Minimal eCommerce Figma Template by Adveits
                        </h2>
                    </div>
                </div>
            </Conatiner>
        </footer>
    )
}

export default Footer