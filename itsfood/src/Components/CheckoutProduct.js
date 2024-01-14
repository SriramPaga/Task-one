import React, { useContext } from 'react';

import { TrashIcon } from '@heroicons/react/24/outline';
import { FoodContext } from '../App';

function CheckoutProduct(props) {
  const { cart, handleDeleteProduct } = useContext(FoodContext);
  const foodData = props.foodData;
  const item = props.item;
  const totalPrice = props.totalPrice;

  function handleDelete(deleteId) {
    // const variableName = [...cart]
    console.log('reaches delete handler' + deleteId);
    handleDeleteProduct(deleteId);
    // console.log(cart);
  }

  return (
    <>
      <div class="justify-between mb-1 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={foodData.image}
          alt="product-image"
          class=" rounded-lg sm:h-20 lg:w-40"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-1 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">
              {foodData.productName}
            </h2>
            <p class="mt-1 text-xs text-gray-700">
              {foodData.productDescription}
            </p>

            {/* <h3 class="text-lg font-bold text-gray-900">₹</h3> */}
          </div>
          <div class="mt-0 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span class="py-1 px-3.5 "> X {item.quantity} </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-lg font-bold">₹{foodData.price * item.quantity}</p>
            </div>
          </div>
        </div>
        {/* <div class="sm:ml-4 sm:flex sm:w-auto sm:justify-end items-center ">
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
            className="bg-grey-light hover:bg-red-300 text-grey-darkest font-bold py-1 px-2 rounded inline-flex items-center"
          >
            <TrashIcon className="h-4 w-auto button" />
          </button>
        </div> */}
      </div>
    </>
  );
}

export default CheckoutProduct;
