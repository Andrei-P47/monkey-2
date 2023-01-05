import React from 'react'
import './App.css'
import {
    Footer,
    Header,
    HeroSection,
    BrandCompany,
    Artist,
    SuperHotDrop,
    LiveAucition,
    CreateYourNft,
    CreatorOfTheWeek,
    JoinOurCommunity,
} from './components'

function App() {
    return (
        <div className="bg-primary-main min-w-[375px]">
            <Header />
            <HeroSection />
            <Artist />
            <BrandCompany />
            <SuperHotDrop />
            {/*<LiveAucition />*/}
            <CreateYourNft />
            <CreatorOfTheWeek />
            <JoinOurCommunity />
            <Footer />
        </div>
    )
}

export default App
