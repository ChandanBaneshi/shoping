import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <>
    <div className='card_maindiv'>
        <div className='card_name'>
            <img src= {props.imgsrc} alt='photo' className='card_img'/>

        </div>
    </div>
    </>
  )
}

export default Cards