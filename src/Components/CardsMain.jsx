import React from 'react'
import CardData from './CardData'
import Cards from './Cards'

const CardsMain = () => {
  return (
    <>
    {/* {CardData.map(val)=>{
        return(
            <Cards
            imgsrc = {val.imgscr}/>
    
        );
    }
    } */}
    
    <Cards 
    imgsrc={CardData[0].imgscr}/>
     <Cards 
    imgsrc={CardData[1].imgscr}/>
     <Cards 
    imgsrc={CardData[2].imgscr}/>
    <Cards 
    imgsrc={CardData[3].imgscr}/>
    
    
    </>
  )
}

export default CardsMain