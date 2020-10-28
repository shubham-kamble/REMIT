import React from 'react'
import HeroSection from '../../HeroSection'
import { dataOne, dataTwo } from './Data'

function Products() {
    return (
        <>
            <HeroSection {...dataOne}></HeroSection>
            <HeroSection {...dataTwo}></HeroSection>
        </>
    )
}

export default Products
