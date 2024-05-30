import React from 'react'
import { IoIosHeart } from "react-icons/io";
import { TiArrowSync } from "react-icons/ti";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router-dom';

const Product = () => {



    return (

        <div className="group p-2">
            <div className=" relative overflow-hidden">
                <div>
                    <picture>
                        <img className="w-full h-[250px]" src="https://i.ibb.co/tKVh2zv/19-23fa6f2c-04d4-4c97-a102-80171c95556c-grande-1-1.png" alt="" />
                    </picture>
                </div>
                <h2 className="text-[14px] font-DMSans font-bold px-9 py-2 bg-primary inline-block
                                     text-white absolute top-0 left-0">
                    new
                </h2>

                <div className="flex flex-col gap-3 py-5 bg-white w-full absolute bottom-[-140px]
                                    group-hover:bottom-0 duration-300">
                    <div className="flex items-center justify-end gap-2 px-5">
                        <h2 className=" text-base font-DMSans text-secoundery">
                            Add to Wish List
                        </h2>
                        <IoIosHeart className="text-xl" />
                    </div>
                    <div className="flex items-center justify-end gap-2 px-5">
                        <h2 className=" text-base font-DMSans text-secoundery">
                            Compare
                        </h2>
                        <TiArrowSync className="text-xl" />
                    </div>
                    <div className="flex items-center justify-end gap-2 px-5">
                        <h2 className=" text-base font-DMSans text-primary font-bold">
                            Add to Cart
                        </h2>
                        <MdLocalGroceryStore className="text-xl" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mt-2">
                    <h2 className=" text-xl font-DMSans font-bold text-primary">
                        Apple
                    </h2>
                    <h2 className=" text-base font-DMSans text-secoundery">
                        $555
                    </h2>
                </div>
                <h2 className="text-base font-DMSans text-secoundery mt-2">Black</h2>
            </div>
        </div>
    )
}

export default Product