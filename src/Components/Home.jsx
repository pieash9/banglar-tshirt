import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt";
import Cart from "./Cart";
import toast from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      toast('Already add krsen~~~')
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container flex mt-7">
      <div className="tshirt-container w-3/4 grid grid-cols-3 gap-4 mx-5">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container w-1/4 sticky top-7 h-[80vh] bg-slate-100 p-5  overflow-y-scroll">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
