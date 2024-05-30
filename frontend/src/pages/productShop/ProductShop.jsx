import React, { useState } from 'react'
import Conatiner from '../../layout/Conatiner'
import BreadCamb from '../../productComponents/bereadCamb/BreadCamb'
import Pagination from '../../layout/Pagination'
import LeftSideBer from '../../productComponents/sidebar/LeftSideBer'

const ProductShop = () => {

    const [show, setShow] = useState(12)
    const handleChange = (e) => {
        setShow(e.target.value);
    };
    // console.log(show);
    return (
        <section className=' mt-20'>
            <Conatiner>
                <div className='mb-16'>
                    <h2 className=' text-primary text-[49px] font-DMSans font-bold'>Product</h2>
                    <BreadCamb />
                </div>
                <div className=' flex gap-5'>
                    <div className='w-1/4'>
                    <LeftSideBer/>
                    </div>
                    <div className='w-3/4'>
                        <div className=' flex justify-end relative'>
                            <div className='flex items-center gap-x-10 mb-4'>
                                <div className=' flex gap-x-1 items-center'>
                                    <h2 className=' text-base text-secoundery font-DMSans'>Sort by:</h2>
                                    <form class="w-[239px] mx-auto">
                                        <label for="underline_select" class="sr-only">Underline select</label>
                                        <select id="underline_select" class="block py-1 px-3 w-full text-sm text-gray-500 
                                bg-transparent border-2 border-gray-200 appearance-none dark:text-gray-400
                                 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>Featured</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </form>
                                </div>

                                <div className=' flex gap-x-1 items-center'>
                                    <h2 className=' text-base text-secoundery font-DMSans'>Show:</h2>
                                    <form class="w-[239px] mx-auto">
                                        <label for="underline_select" class="sr-only">Underline select</label>
                                        <select onChange={(e) => handleChange(e)} id="underline_select" class="block py-1 px-3 w-full text-sm text-gray-500 
                                bg-transparent border-2 border-gray-200 appearance-none dark:text-gray-400
                                 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>36</option>
                                            <option >1</option>
                                            <option >2</option>
                                            <option >5</option>
                                            <option >10</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Pagination itemsPerPage={show}/>
                        <p></p>
                    </div>
                </div>
            </Conatiner>
        </section>
    )
}

export default ProductShop