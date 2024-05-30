import React, { useEffect, useState } from "react";
import BreadCamb from '../../productComponents/bereadCamb/BreadCamb'
import Container from '../../layout/Conatiner'
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { variantInfo } from "../../silces/VariantSlice";
import { cartInfo } from "../../silces/CartSilce";

const ProductDeatils = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [product, setProduct] = useState([])
    const { id } = useParams('');
    const dispatch = useDispatch()
    const productdata = product.find((item) => item._id == id);
    const data = useSelector(state => state.variantInfo.value)


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        async function getAllProduct() {
            const data = await axios.get('http://localhost:8000/api/v1/product/getAllProduct');
            setProduct(data.data)
        }
        getAllProduct()
    }, []);

    const productVariantData = productdata?.variant[0];

    const handleVariant = (item) => {
        dispatch(variantInfo(item));
        localStorage.setItem('variantInfo', JSON.stringify(item))
    };

    const handleAddCart = () => {
        dispatch(cartInfo(data || productVariantData));
        localStorage.setItem('cartInfo', JSON.stringify(data || productVariantData))
    }






    return (
        <div className=" py-20">
            <Container>
                <div className="py-5">
                    <BreadCamb />
                </div>
                <div>
                    <div>



                        <div>
                            <div className='flex flex-wrap justify-center gap-3 mb-4'>
                                <img className="w-[40%] h-[400px] border-2 border-blue-300 rounded-lg" src={data?.image || productVariantData?.image} />
                            </div>

                            <div className='flex flex-wrap justify-center gap-3'>
                                {
                                    productdata?.variant.map((item) => (
                                        <div onClick={() => handleVariant(item)} >
                                            <img className="w-20 h-24 border-2 border-blue-300 rounded-lg" src={item?.image} />
                                        </div>
                                    ))
                                }
                            </div>
                            <h2 className="text-[39px] text-primary font-DMSans font-bold mt-4">
                                {productdata?.name}
                            </h2>

                            <h2 className="text-xl text-primary font-DMSans font-bold mb-4">
                                {data?.variantName || productdata?.variantName}
                            </h2>

                            <div className="flex gap-5 items-center">
                                <div className="flex gap-2 text-base">
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                </div>
                                <h2 className="text-[14px] font-DMSans text-primary">
                                    1 Review
                                </h2>
                            </div>
                            <div className="flex items-center gap-x-5 mt-6 pb-4 border-b-2">
                                <h2 className="text-base font-DMSans text-secoundery line-through">$88.00</h2>
                                <h2 className="text-2xl text-primary font-DMSans font-bold">${data?.price || productVariantData?.price}.00</h2>
                            </div>

                            <div className=" border-b-2 pb-5">
                                <div className="mt-5 flex gap-x-20 items-center">
                                    <h2 className="text-xl font-DMSans font-bold text-primary">Color :</h2>
                                    <div className="flex gap-x-4">
                                        <div className=" text-base font-bold font-DMSans">{data?.color || productVariantData?.color}</div>
                                    </div>
                                </div>
                                {
                                    <div className="mt-5 flex gap-x-20 items-center">
                                        <h2 className="text-xl font-DMSans font-bold text-primary">Ram :</h2>
                                        <div className="flex gap-x-4">
                                            <div className=" text-base font-bold font-DMSans">{data?.ram || productVariantData?.ram}</div>
                                        </div>
                                    </div>
                                }
                                <div className="mt-5 flex gap-24 items-center">
                                    <h2 className="text-xl font-DMSans font-bold text-primary capitalize">Size: </h2>
                                    <div className="flex gap-x-4 z-50 relative">
                                        <button onClick={toggleDropdown} className="text-white border-2 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">

                                            <svg className={`w-2.5 h-2.5 ms-3 text-black ${isDropdownOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 top-8">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                    <li>
                                                        <button className="block px-3  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => console.log("Dashboard clicked")}>M</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-5 flex gap-10 items-center">
                                    <h2 className="text-xl font-DMSans font-bold text-primary">QUANTITY:</h2>
                                    <div className="flex gap-x-4 text-xl font-bold text-primary font-DMSans border-2 px-4 py-1">
                                        <h2>-</h2><h2>1</h2><h2>+</h2>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex items-center gap-x-3 border-b-2 pb-2 mt-5">
                                <h2 className=" text-xl font-DMSans font-bold text-primary capitalize">
                                    Status:
                                </h2>
                                <h2 className=" text-base font-DMSans text-secoundery">
                                    In stock
                                </h2>
                            </div>

                            <div className=" flex gap-5 mt-5 border-b-2 pb-5">
                                <button className=" text-primary font-extrabold font-DMSans text-[14px] px-6 py-2 border-2
                             border-primary hover:bg-primary hover:text-white duration-300">
                                    Add to Wish List
                                </button>
                                <button onClick={handleAddCart} className=" text-primary font-extrabold font-DMSans text-[14px] px-6 py-2 border-2
                             border-primary hover:bg-primary hover:text-white duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>




                        <div className=" my-5">
                            <h2 className=" text-base font-bold font-DMSans text-primary border-b-2 pb-2">FEATURES  & DETAILS</h2>
                            <h2 className=" text-base font-bold font-DMSans text-primary border-b-2 pb-2 mt-4">SHIPPING & RETURNS</h2>
                        </div>
                        <div>
                            <h2 className=" font-DMSans text-base font-bold text-primary">Description</h2>
                            <p className=" text-[14px] text-secoundery font-DMSans mb-10">
                                {productdata?.description}
                            </p>
                        </div>

                        <div>
                            <h2 className=" text-xl font-bold text-primary font-DMSans mb-10">
                                Reviews (1)
                            </h2>
                            <h2 className=" text-xl text-secoundery font-DMSans mb-10 pb-5 border-b-[1px]">
                                1 review for Product
                            </h2>
                        </div>

                        <div className=" border-b-2 pb-5">
                            <div className="flex gap-5 items-center mb-5">
                                <h2 className="text-[14px] font-DMSans text-primary font-bold">
                                    md antor khan
                                </h2>
                                <div className="flex gap-2 text-base">
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                    <FaStar className="text-[#FFD881]" />
                                </div>
                            </div>
                            <p className=" text-base font-DMSans text-secoundery">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>

                        <div className=" mt-7">
                            <h2 className=" text-xl font-bold text-primary font-DMSans">
                                Add a Review
                            </h2>
                            <div className=" flex flex-col gap-5 mt-4 ">
                                <div>
                                    <h2 className=" text-xl font-bold text-primary font-DMSans ml-5">Name</h2>
                                    <input type="text" placeholder="Your name here" className=" text-base px-5 py-1 outline-none
                             border-b-2 w-full font-DMSans font-medium"/>
                                </div>
                                <div>
                                    <h2 className=" text-xl font-bold text-primary font-DMSans ml-5">Email</h2>
                                    <input type="text" placeholder="Your email here" className=" text-base px-5 py-1 outline-none
                             border-b-2 w-full font-DMSans font-medium"/>
                                </div>
                                <div>
                                    <h2 className=" text-xl font-bold text-primary font-DMSans ml-5">Review</h2>
                                    <textarea type="text" placeholder="Your review here" className=" text-base px-5 py-1 outline-none
                                    border-b-2 w-full font-DMSans font-medium"/>
                                </div>
                                <button className=" text-xl px-7 py-2 bg-primary text-white w-[150px]">
                                    Post
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductDeatils;
