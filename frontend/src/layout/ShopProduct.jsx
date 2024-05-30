import React from 'react'
import { IoIosHeart } from "react-icons/io";
import { TiArrowSync } from "react-icons/ti";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router-dom';


const ShopProduct = ({ productData }) => {
    return (
        <div className="group border-2 m-2 rounded-lg overflow-hidden">
            <div className=" relative overflow-hidden">
                <div>
                    <picture>
                        <img className="w-full h-[250px]" src={productData.variant[0].image} alt="" />
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
            <div className=' px-5'>
                <Link to={`/productDeatils/${productData._id}`}>
                    <div className="flex justify-between items-center mt-2">
                        <h2 className=" text-xl font-DMSans font-bold text-primary">
                            {productData.name}
                        </h2>
                        <h2 className=" text-base font-DMSans text-primary">
                            ${productData.variant[0].price}.00
                        </h2>
                    </div>
                </Link>
                <h2 className="text-base font-DMSans text-secoundery mt-2">
                    Black
                </h2>
            </div>
        </div>
    )
}

export default ShopProduct