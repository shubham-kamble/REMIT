import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing/Pricing'
import { dataFour, dataOne, dataThree, dataTwo } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...dataOne}></HeroSection>
            <HeroSection {...dataTwo}></HeroSection>
            <HeroSection {...dataThree}></HeroSection>
            <Pricing></Pricing>
            <HeroSection {...dataFour}></HeroSection>
        </>
    )
}

export default Home
