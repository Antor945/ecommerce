import React from 'react'
import Container from '../../layout/Conatiner'

const SpecialOffers = () => {
    const data = [
        {
            badge: '10%',
            img: 'https://i.ibb.co/T1rnjYt/Image-4.png',
            taitle: "Basic Crew Neck Tee",
            price: "$44.00",
            variant: 'Black'
        },
        {
            badge: 'New',
            img: 'https://i.ibb.co/WFTmMSG/Image-5.png',
            taitle: "Basic Crew Neck Tee",
            price: "$60.00",
            variant: 'Black'
        },
        {
            badge: '15%',
            img: 'https://i.ibb.co/s2Y3pkn/25-d6b69c8c-3c6a-40e4-a3ab-6c4eb0e1e46a-grande-1.png',
            taitle: "Basic Crew Neck Tee",
            price: "$45.00",
            variant: 'Black'
        },
        {
            badge: '',
            img: 'https://i.ibb.co/1qdb8fs/2-grande-1.png',
            taitle: "Basic Crew Neck Tee",
            price: "$50.00",
            variant: 'Black'
        }
    ]

    return (
        <section id='SpecialOffers' className=' mb-20'>
            <Container>
                <div>
                    <h2 className='text-[39px] font-DMSans font-bold text-primary'>Special Offers</h2>
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
            </Container>
        </section>
    )
}

export default SpecialOffers