import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Add some product...</p>;
  } else {
    message = <p>Thanks for wasting your money !!!</p>;
  }
  // console.log(cart)
  return (
    <div>
      <p className={`text-3xl ${cart.length >=1 ?'text-blue-500': 'text-red-500'}`}>Order summary: {cart.length}</p>
      {cart.length > 2 ? "Aro kino" : "Fokira"}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button
            onClick={() => handleRemoveFromCart(tshirt._id)}
            className="btn btn-error btn-sm btn-circle ml-5 my-1"
          >
            X
          </button>
        </p>
      ))}
      {cart.length === 2 && <p>Double Bonanza!!!</p>}
      {cart.length === 3 || <p>3 ta to hoilo na !!!</p>}
    </div>
  );
};

export default Cart;

/* 
### conditional rendering 
1. use if else to set a variable that will contain a element or component.
2. Ternary operator: condition ? 'for true' : ' false'
3. logical && : (if the condition is true then the next thing will be displayed)
4. logical || :(if the condition is false then then next thing will be displayed)
*/

/* 
### conditional CSS class
1. use ternary
2. Ternary inside template string
*/
