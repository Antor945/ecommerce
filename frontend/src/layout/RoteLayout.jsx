import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Headers from '../components/headers/Headers'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const RoteLayout = () => {
    return (
        <>
            <NavBar />
            <Headers />
            <Outlet />
            <Footer/>
        </>
    )
}

export default RoteLayout