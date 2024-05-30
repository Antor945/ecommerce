import React from 'react'
import Banner from '../../components/banner/Banner'
import Advertise from '../../components/advertise/Advertise'
import NewArrivals from '../../components/newArrivals/NewArrivals'
import BestSeller from '../../components/bestSeller/BestSeller'
import Ads from '../../components/ads/Ads'
import SpecialOffers from '../../components/specialOffers/SpecialOffers'

const Home = () => {
    return (
        <div>
            <Banner />
            <Advertise />
            <NewArrivals />
            <BestSeller />
            <Ads />
            <SpecialOffers />
        </div>
    )
}

export default Home