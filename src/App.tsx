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
import CreateYourNft from './components/CreateYourNft'
import CreatorOfTheWeek from './components/CreatorOfTheWeek'

function App() {
    return (
        <div className="bg-primary-main">
            <div className="container mx-auto w-[1208px]">
                <Header />
                <HeroSection />
                <Artist />
                <BrandCompany />
                <SuperHotDrop />
                {/*<Aici trebuie sa mai fie ceva*/}
                <CreateYourNft />
                <CreatorOfTheWeek />
                <Footer />
            </div>
        </div>
    )
}

export default App
