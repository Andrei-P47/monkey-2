import React from 'react'
import './App.css'
import { Footer, Header } from './components'

function App() {
    return (
        <div className="bg-primary-main">
            <div className="container mx-auto w-[1200px]">
                <Header />
                <Footer />
            </div>
        </div>
    )
}

export default App
