import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing/Pricing'
import { dataOne} from './Data'

function Services() {
    return (
        <>
            <Pricing></Pricing>
            <HeroSection {...dataOne}></HeroSection>
        </>
    )
}

export default Services
