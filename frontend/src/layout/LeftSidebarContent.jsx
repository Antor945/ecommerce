import React, { useEffect, useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import LeftSideBarItem from './LeftSideBarItem';
import axios from 'axios';


const LeftSidebarContent = ({ dropdown, taitle }) => {

    const [show, setShow] = useState(dropdown);
    const [drop, setDrop] = useState(dropdown);
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        async function getAllCategory() {
            const categoryData = await axios.get('http://localhost:8000/api/v1/category/getCategory');
            setCategoryData(categoryData.data);
        }
        getAllCategory();
    }, [])

    return (

        <div className='mb-5'>

            <div>
                {drop ?
                    (
                        <div onClick={() => setShow(!show)} className=' flex items-center justify-between mt-5  pb-4 cursor-pointer'>
                            <h2 className=' font-DMSans text-xl font-bold text-primary'>{taitle}</h2>
                            <IoMdArrowDropup className={`text-primary text-xl
                  ${show == true ? ' duration-500' : 'rotate-180 duration-500'}`} />
                        </div>
                    )
                    : (
                        <div className=' flex items-center justify-between mt-5  pb-4 cursor-pointer'>
                            <h2 className=' font-DMSans text-xl font-bold text-primary'>{taitle}</h2>
                        </div>
                    )}

            </div>

            {
                show &&
                <div>
                    <LeftSideBarItem subDropdown={false} taitle={'Category 1'} color={"red"}>
                        <p>demo</p>
                    </LeftSideBarItem>
                    <LeftSideBarItem subDropdown={true} taitle={'Category 2'} color={"red"}>
                        <p>demo</p>
                    </LeftSideBarItem>
                    <LeftSideBarItem subDropdown={true} taitle={'Category 3'} color={"red"}>
                        <p>demo</p>
                    </LeftSideBarItem>
                    <LeftSideBarItem subDropdown={true} taitle={'Category 4'} color={"red"}>
                        <p>demo</p>
                    </LeftSideBarItem>
                    <LeftSideBarItem subDropdown={true} taitle={'Category 5'} color={"red"}>
                        <p>demo</p>
                    </LeftSideBarItem>
                    {/* <LeftSideBarItem taitle={'Shop by Color'} />
                    <LeftSideBarItem subDropdown={true} taitle={'Shop by Brand'} />
                    <LeftSideBarItem subDropdown={true} taitle={'Shop by Price'} /> */}
                </div>
            }

            {drop == false
                &&
                <div>
                    {
                        categoryData.map((item) => (
                            <LeftSideBarItem subDropdown={true} taitle={item.name} color={"red"}>
                                {
                                    item.subCategory.map((subData)=>(
                                        <p>{subData.name}</p>
                                    ))
                                }
                            </LeftSideBarItem>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default LeftSidebarContent