import React, { useState } from 'react';

const AddToCart = () => {
    const[num , setNum] = useState(1);

    const incNum =()=>{
        setNum(num+1)
    }
    const decNum =()=>{
        if(num >0){
            setNum(num-1);
        }
        else {
            setNum(0)
        }
        
    }
    // flex items-center justify-between flex-wrap bg-red-500 p-6

  return (
    <div>
        <div className="main_div">
            <div className="flex item-center justify-between flex-wrap p-6 bg-orange-200 mr-50  ml-50">
            <button onClick={decNum}>-</button>
                
                <h1 className="mx-4">{num}</h1>
                
                   
                    <button onClick={incNum}>+</button>
               

            </div>
        </div>
      
    </div>
  );
}

export default AddToCart;
