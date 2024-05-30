import React, { Component } from "react";
import Slider from "react-slick";
import Conatiner from '../../layout/Conatiner'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Product from "../../layout/Product";

const NewArrivals = () => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className="p-5 bg-[#979797] right-6 z-50  absolute  top-[35%] rounded-full" onClick={onClick}>
                <FaArrowRightLong
                    className='text-2xl text-white
               '  />
            </div>
        );
    };

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className="p-5 bg-[#979797] left-6 z-50  absolute  top-[35%] rounded-full" onClick={onClick}>
                <FaArrowLeftLong
                    className='text-2xl text-white
               '  />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    // nextArrow: <FaArrowLeftLong />,
    //     prevArrow: <FaArrowRightLong />
    const data = [
        {
            badge: '10%',
            img: 'https://i.ibb.co/fdFDXpm/Image.png',
            taitle: "Basic Crew Neck Tee",
            price: "$44.00",
            variant: 'Black'
        },
        {
            badge: 'New',
            img: 'https://i.ibb.co/tKVh2zv/19-23fa6f2c-04d4-4c97-a102-80171c95556c-grande-1-1.png',
            taitle: "Basic Crew Neck Tee",
            price: "$60.00",
            variant: 'Black'
        },
        {
            badge: '15%',
            img: 'https://i.ibb.co/mRTWWnm/16-af000deb-7f2c-40c0-af34-6225fb7af5cd-grande-1.png',
            taitle: "Basic Crew Neck Tee",
            price: "$45.00",
            variant: 'Black'
        },
        {
            badge: '',
            img: 'https://i.ibb.co/QjHFYBH/Image-1.png',
            taitle: "Basic Crew Neck Tee",
            price: "$50.00",
            variant: 'Black'
        }
    ];
    return (
        <section id="NewArrivals" className='py-8'>
            <Conatiner>
                <div>
                    <h2 className='text-[39px] font-DMSans font-bold text-primary'>New Arrivals</h2>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            data.map(() => (
                                <Product/>
                            ))
                        }
                    </Slider>
                </div>
            </Conatiner>
        </section>
    )
}

export default NewArrivals