import React from 'react'
import Conatiner from '../../layout/Conatiner'

const Advertise = () => {
    return (
        <section id='advertise' className='py-10'>
            <Conatiner>
                <div className='flex gap-5'>
                    <div className='w-6/12'>
                        <picture>
                            <img src="https://i.ibb.co/DWjyC77/Arrival-1.png" alt="" />
                        </picture>
                    </div>
                    <div className='w-6/12 flex flex-col justify-between'>
                        <div>
                            <picture>
                                <img src="https://i.ibb.co/2KswbVY/Arrival-3.png" alt="" />
                            </picture>
                        </div>
                        <div>
                            <picture>
                                <img src="https://i.ibb.co/1MFQWYk/Arrival-2.png" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </Conatiner>
        </section>
    )
}

export default Advertise