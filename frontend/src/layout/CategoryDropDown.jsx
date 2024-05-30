import React from 'react'

const Category = () => {
    const categoryData = [
        {
            name: "Accesories"
        },
        {
            name: "Furniture"
        },
        {
            name: "Electronics"
        },
        {
            name: "Clothes"
        },
        {
            name: "Bags"
        },
        {
            name: "appliances"
        }
    ]
    return (
        <div className='w-[263px] bg-primary '>
            {
                categoryData.map((item) => (
                    <h2 className=' text-[14px] font-DMSans py-4 border-b-2 text-[#bdb8b8] pl-3
       border-[#454242] hover:ml-3 hover:text-white duration-500'>{item.name}</h2>
                ))
            }

        </div>
    )
}

export default Category