import React from 'react';
import { useContext } from 'react';
import { FoodContext } from '../App';
import ProductCard from './ProductCard';
function CounterButton(props) {
  const { cart, cartAddition } = useContext(FoodContext);
  function handleFun(IncDec) {
    cartAddition(props.prodId, IncDec);
  }
  let cartData;
  cart.map((item, index) => {
    if (item.id === props.prodId) {
      cartData = item;
    }
  });
  return (
    <>
      <div class="custom-number-input h-10 w-32">
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent ">
          <button
            onClick={() => {
              handleFun('Decrement');
            }}
            data-action="decrement"
            class=" bg-red-300 text-gray-600 hover:text-gray-700 hover:bg-red-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            // type="number"
            class="focus:outline-none text-center  w-full bg-red-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value={cartData.quantity}
          ></input>
          <button
            onClick={() => {
              handleFun('Increment');
            }}
            data-action="increment"
            class="bg-red-300 text-gray-600 hover:text-gray-700 hover:bg-red-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterButton;
