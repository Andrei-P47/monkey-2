import React from 'react'
import './App.css'
import {
    Footer,
    Header,
    HeroSection,
    BrandCompany,
    Artist,
    SuperHotDrop,
} from './components'

function App() {
    return (
        <div className="bg-primary-main">
            <div className="container mx-auto w-[1208px]">
                <Header />
                <HeroSection />
                <Artist />
                <BrandCompany />
                <SuperHotDrop />
                <Footer />
            </div>
        </div>
    )
}

export default App
