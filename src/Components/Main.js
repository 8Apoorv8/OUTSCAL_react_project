import React from 'react'
import Career from './Career'
import Community from './Community'
import Featured from './Featured'
import Footer from './Footer'
import Footer2 from './Footer2'
import Hero from './Hero'
import Navbar from './Navbar'
import Partners from './Partners'
import Projects from './Projects'
import Scholarship from './Scholarship'
import SliderCard from './SliderCard'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SliderCard />
            <Projects />
            <Partners />
            <Scholarship />
            <Career />
            <Featured />
            <Community />
            <Footer />
            <Footer2 />
        </div>
    )
}

export default Main