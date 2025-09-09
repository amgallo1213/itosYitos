import './Menu.css';

import React from 'react'

const Menu = () => {
  return (
    <div className="menu">
        <h2>Menu</h2>
        <div className='menu-items'>
            <div className='menu-item'>
                    <h3>Mojito</h3>
                    <p>Rum, Mint, Simple, Icy Cubes</p>
                    <p className='menu-line'>| make it guava - $4 |</p>
                </div>
                <div className='menu-item'>
                    <h3>Iced Tea-to</h3>
                    <p>Black Ice Tea, Rum, Mint, So Many Cubes </p>
                </div>
                <div className='menu-item'>
                    <h3>Taquito</h3>
                    <p>Potato, Cheese, Refried Beans, Lettuce</p>
                </div>
                <div className='menu-item'>
                    <h3>Tiradito</h3>
                    <p>Tuna, Radish, Seaweed, Serrano</p>
                </div>
                <div className='menu-item'>
                    <h3>Burrito</h3>
                    <p>Cheese, Rice, Beans, Avocado, Pico de Gallo</p>
                    <p className='menu-line'>| chicken, steak, chorizo, breakfast |</p>
                </div>
                
                <div className='menu-item'>
                    <h3>Jarritos</h3>
                    <p>Pineapple, Lime, Mandarin, Watermelon</p>
                </div>
        </div>
    </div>
  )
}

export default Menu