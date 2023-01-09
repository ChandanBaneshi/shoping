import React from 'react';
import Fdata from './Fdata';

const Footer = () => {
  return (
    <div className='grid grid-cols-3 gap-2 max-w-[1200px] mx-auto py-6'>
        {Fdata.map((item,index)=>{
            return(
                <>
                <div >
                   
                    

                <div key={index}>
                    <img src={item.imgsrce} alt="" className='m-4'/>


                </div>
                </div>
                </>
            )
        })}
    
    </div>
  );
}

export default Footer;
