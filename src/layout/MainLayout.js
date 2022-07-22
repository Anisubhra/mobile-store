import React from 'react'
import { AppDownload, Featured, Footer, Header, Hero, Reviews } from '../components'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Hero />
            {children}
            <Featured />
            <Reviews />
            <AppDownload />
            <Footer />
        </>
    )
}

export default MainLayout