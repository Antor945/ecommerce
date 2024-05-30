import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../../layout/Conatiner'
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { RiNumber2 } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";


const Banner = () => {
    const [activeDot, setActiveDot] = useState('');
    const data = [
        {
            imgUrl: 'https://i.ibb.co/ngLFHJ1/banner.png'
        },
        {
            imgUrl: 'https://i.ibb.co/ngLFHJ1/banner.png'
        },
        {
            imgUrl: 'https://i.ibb.co/ngLFHJ1/banner.png'
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setActiveDot(next)
        },
        appendDots: dots => (
            <div
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '120px',
                    transform: 'translateY(-50%)',
                }}
            >
                <ul>
                    <li style={{ display: 'block' }}>{dots}</li>
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === activeDot ?
                        {
                            width: "30px",
                            color: "#262626",
                            borderRight: "5px solid #262626",
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            paddingLeft: '8px',
                            paddingRight: '30px',
                            fontSize: '14px',
                            fontFamily: 'DMSans',
                            marginLeft: '20px'
                        }
                        :
                        {
                            width: "30px",
                            color: "#262626",
                            borderRight: "5px solid white",
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            paddingLeft: '8px',
                            paddingRight: '30px',
                            fontSize: '14px',
                            fontFamily: 'DMSans',
                            marginLeft: '20px'
                        }

                }
            >
                0{i + 1}
            </div>
        ),
    };

    return (
        <section id='Banner' className=' relative'>
            <Slider {...settings}>
                {
                    data.map((item) => (
                        <div>
                            <picture>
                                <img className='w-full' src={item.imgUrl} alt="" />
                            </picture>
                        </div>
                    ))
                }
            </Slider>
            <div className='border-b-2'>
                <Container>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4 py-5 '>
                            <RiNumber2 className=' text-2xl font-bold' />
                            <h2 className=' text-base font-DMSans text-secoundery'>Two years warranty</h2>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaCarSide className='text-2xl text-primary ' />
                            <h2 className=' text-base font-DMSans text-secoundery'>Free shipping</h2>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <PiArrowCounterClockwiseBold className='text-2xl text-primary ' />
                            <h2 className=' text-base font-DMSans text-secoundery'>Return policy in 30 days</h2>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Banner