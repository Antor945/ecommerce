import React from 'react'
import clock from '../../assets/clock.png'
import Conatiner from '../../layout/Conatiner'

const Ads = () => {
    return (
        <section id='ads' className='my-20 bg-[#F3F3F3]'>
            <Conatiner>
                <div className='flex justify-center items-center'>
                    <div className='w-5/12'>
                        <picture>
                            <img src={clock} alt="" />
                        </picture>
                    </div>
                    <div className='w-6/12'>
                        <div>
                            <h2 className=' text-3xl font-DMSans text-primary font-bold mb-5'>
                                Phone of the year
                            </h2>
                            <p className=' text-primary text-base font-DMSans font-medium mb-7'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
                            </p>
                            <button className=' bg-primary text-white text-[14px] font-DMSans font-bold
                             px-5 py-2 capitalize'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </Conatiner>
        </section>
    )
}

export default Ads