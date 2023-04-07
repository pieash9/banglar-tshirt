import React from 'react';

const TShirt = ({tshirt,handleAddToCart}) => {
    // console.log(tshirt)
    const {price,picture,name} = tshirt
    return (
        <div className='border rounded-xl border-blue-300 p-3 '>
            <img className='h-64 rounded-lg' src={picture} alt="" />
            <h5 className="text-xl">{name}</h5>
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToCart(tshirt)} className="btn btn-info mt-3 w-full">Buy now</button>
        </div>
    );
};

export default TShirt;