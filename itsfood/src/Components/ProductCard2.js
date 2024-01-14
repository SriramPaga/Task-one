import React from 'react';
import Data from '../JSONData/data.json';
import Button from './Button';
import CounterButton from './CounterButton';
import { useContext } from 'react';
import { FoodContext } from '../App';

function ProductCard2(props) {
  const { cart } = useContext(FoodContext);
  return (
    <>
      {Data.map((itemData, index) => {
        let isFound = false;
        isFound = cart.some((element) => element.id === itemData.id);
        return (
          // my-10 flex  flex-col overflow-hidden border border-gray-100 bg-white shadow-md
          <div class="my-10 min-w-1/2 max-w-sm flex-col border border-gray-100 bg-white shadow-md">
            <a class="relative flex h-60 overflow-hidden" href="#">
              <img
                class="absolute top-0 right-0 h-full w-full object-cover"
                src={itemData.image}
                alt="product image"
              />
            </a>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {itemData.productName}
                </h5>
                <p class="text-gray-700 text-base">
                  {itemData.productDescription}
                </p>
              </a>
              <div class="mt-2 mb-5 flex items-center justify-between ">
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    ₹{itemData.price}
                  </span>
                </p>
              </div>
            </div>
            <div className="mb-4 container flex justify-center">
              {isFound ? (
                <CounterButton prodId={itemData.id} />
              ) : (
                <Button bgcolor={'bg-red-500'} prodId={itemData.id} />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard2;

// code for like product on hover at bottem of card
{
  /* <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
<button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-5 w-5"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    clip-rule="evenodd"
  />
</svg>
</button>
</div> */
}

// number of images dots
{
  /* <div class="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
<div class="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
<div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
<div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
</div> */
}
