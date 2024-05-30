import React from 'react'
import Conatiner from '../../layout/Conatiner'

const BestSeller = () => {
    const data = [
        {
            badge: '10%',
            img: 'https://i.ibb.co/N2ss8nS/Image-3.png',
            taitle: "Basic Crew Neck Tee",
            price: "$44.00",
            variant: 'Black'
        },
        {
            badge: 'New',
            img: 'https://i.ibb.co/y5pbntV/Image-2.png',
            taitle: "Basic Crew Neck Tee",
            price: "$60.00",
            variant: 'Black'
        },
        {
            badge: '15%',
            img: 'https://i.ibb.co/QdG2ZdD/12-33c6ffea-3735-41d9-87ce-2ed0ca2f920d-grande-1.png',
            taitle: "Basic Crew Neck Tee",
            price: "$45.00",
            variant: 'Black'
        },
        {
            badge: '',
            img: 'https://i.ibb.co/gTzNbQ7/27-ac347275-415c-4727-bfba-8b7c32e0305c-grande-1.png',
            taitle: "Basic Crew Neck Tee",
            price: "$50.00",
            variant: 'Black'
        }
    ]
    return (
        <section id='bestSeller' className='py-5'>
            <Conatiner>
                <div>
                    <h2 className='text-[39px] font-DMSans font-bold text-primary'>Best seller</h2>
                </div>
                <div className='flex gap-3'>
                    {
                        data.map((item) => (
                            <div className="w-3/12 group p-2">
                                <div className=" relative overflow-hidden">
                                    <div>
                                        <picture>
                                            <img className="w-full" src={item.img} alt="" />
                                        </picture>
                                    </div>
                                    {
                                        item.badge == '' ?
                                            false
                                            :
                                            <h2 className="text-[14px] font-DMSans font-bold px-9 py-2 bg-primary inline-block
                                     text-white absolute top-0 left-0">
                                                {item.badge}
                                            </h2>
                                    }
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mt-2">
                                        <h2 className=" text-xl font-DMSans font-bold text-primary">
                                            {item.taitle}
                                        </h2>
                                        <h2 className=" text-base font-DMSans text-secoundery">
                                            {item.price}
                                        </h2>
                                    </div>
                                    <h2 className="text-base font-DMSans text-secoundery mt-2">{item.variant}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Conatiner>
        </section>
    )
}

export default BestSeller