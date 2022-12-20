import React from 'react'
import './App.css'
import { Footer, Header } from './components'
import BrandCompany from './components/BrandCompany'

function App() {
    return (
        <div className="bg-primary-main">
            <div className="container mx-auto w-[1200px]">
                <Header />
                <BrandCompany />
                <Footer />
            </div>
        </div>
    )
}

export default App
