import './Features.css';
import CircularText from './CircularText'
import Taquitos from '../assets/Taquitos.jpg'
import React, { useState } from 'react'



const Features = () => {

    const [count, setCount] = useState(0)

  return (
    <div className='features'>
        <button onClick={() => setCount((count) => count + 1)}>
          How many burritos? <span className='count'>{count}</span> 
        </button>
        <div className="features-container">
            <CircularText 
                text="ITOS * Y ITOS * Y *"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            /> 
            <img src={Taquitos} alt="" />
        </div>
    </div>
  )
}

export default Features