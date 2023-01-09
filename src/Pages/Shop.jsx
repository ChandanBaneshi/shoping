import React from 'react';
import AddToCart from '../Shopcomp/AddToCart';
import CardData from '../Components/CardData';
import Cards from '../Components/Cards';

const Shop = () => {
  return (
    <div className='mx-6'>
      <div className="flex items-center justify-between flex-wrap bg-yellow-50 p-6 shadow-2xl mb-4">
      <Cards 
      imgsrc={ CardData[0].imgscr} />
      <AddToCart/>
      </div>
    

      <div className="flex items-center justify-between flex-wrap bg-yellow-50 p-6 shadow-2xl">
      <Cards 
      imgsrc={ CardData[1].imgscr} />
      <AddToCart/>
      </div>
    </div>
  );
}

export default Shop;
