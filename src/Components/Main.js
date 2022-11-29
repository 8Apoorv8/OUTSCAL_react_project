import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
import SliderCard from './SliderCard'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SliderCard />
            <Projects />
        </div>
    )
}

export default Main