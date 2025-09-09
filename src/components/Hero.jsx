import './Hero.css'
// import CircularText from './CircularText'
import MojitoOne from '../assets/MojitoOne.jpg'
import Neon from '../assets/Neon.jpg'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <h1>Itos y Itos</h1>
        <div className="hero-container">
            
            <img src={MojitoOne} alt="" />
            <img src={Neon} alt="" />
            {/* <CircularText
                text="ITOS * Y * ITOS * Y * "
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            /> */}
        </div>
    </div>
  )
}

export default Hero