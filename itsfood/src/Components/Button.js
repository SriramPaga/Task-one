import React from 'react';
import { useContext, useState } from 'react';
import { FoodContext } from '../App';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
function Button(props) {
  const { cart, cartAddition } = useContext(FoodContext);
  function handleCounts() {
    // const variableName = [...cart]
    cartAddition(props.prodId);
    // console.log(cart);
  }
  return (
    <>
      <button
        class={` h-10 w-32  flex items-center align-items-center rounded-lg justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700 ${props.bgcolor}`}
        onClick={handleCounts}
      >
        Add
        <ShoppingCartIcon className="h-4 ml-3 " />
      </button>
    </>
  );
}

export default Button;
