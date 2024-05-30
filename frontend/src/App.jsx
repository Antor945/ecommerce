import './App.css'
import Ads from './components/ads/Ads'
import Advertise from './components/advertise/Advertise'
import Banner from './components/banner/Banner'
import BestSeller from './components/bestSeller/BestSeller'
import Footer from './components/footer/Footer'
import Headers from './components/headers/Headers'
import NavBar from './components/navbar/NavBar'
import NewArrivals from './components/newArrivals/NewArrivals'
import SpecialOffers from './components/specialOffers/SpecialOffers'

function App() {

  return (
    <>
      <NavBar />
      <Headers />
      <Banner />
      <Advertise/>
      <NewArrivals />
      <BestSeller/>
      <Ads/>
      <SpecialOffers/>
      <Footer/>
    </>
  )
}

export default App
