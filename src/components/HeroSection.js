import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (
        <>
          <div className={lightBg ? 'home_hero_section' : 'home_hero_section darkBg'}>
              <div className="container">
                  <div className="row home_hero_row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}>
                    <div className="col">
                        <div className="home_hero_text_wrapper">
                            <div className="top_line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home_hero_subtitle':'home_hero_subtitle dark'}>{description}</p>
                            <Link to='signup'>
                                <Button buttonSize='btn-wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home_hero_img_wrapper">
                            <img src={img} alt={alt} className='home_hero_img'/>
                        </div>
                    </div>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default HeroSection
