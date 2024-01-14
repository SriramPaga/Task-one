import React, { useContext } from 'react';

import { TrashIcon } from '@heroicons/react/24/outline';
import { FoodContext } from '../App';
function CartProduct(props) {
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
      {/* <div class="h-screen bg-gray-100 pt-20"> */}
      {/* <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
      {/* <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"> */}
      {/* <div class="rounded-lg md:w-2/3"> */}
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={foodData.image}
          alt="product-image"
          class="w-full rounded-lg sm:w-40"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-1 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">
              {foodData.productName}
            </h2>
            <p class="mt-1 text-xs text-gray-700">
              {foodData.productDescription}
            </p>
            <h3 class="text-lg font-bold text-gray-900">₹{foodData.price}</h3>
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
        <div class="sm:ml-4 sm:flex sm:w-auto sm:justify-end items-center ">
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
            className="bg-grey-light hover:bg-red-300 text-grey-darkest font-bold py-1 px-2 rounded inline-flex items-center"
          >
            <TrashIcon className="h-4 w-auto button" />
          </button>
        </div>
      </div>

      {/* </div> */}

      {/* </div>
      </div> */}
    </>
  );
}

export default CartProduct;

// <div className='container'>

//       <div class="border mx-1 my-1 border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//         <div class="mb-6">
//           <div class="text-gray-900 font-bold text-xl mb-2">
//             {foodData.productName}
//           </div>
//           <p class="text-gray-700 text-base">{foodData.price}</p>
//           <p class="text-gray-700 text-base">{item.quantity}</p>
//           <p class="text-gray-700 text-base">
//             {foodData.price * item.quantity}
//           </p>
//         </div>
//       </div>

//   {totalPrice}
// </div>

//total Price of Cart Value Component
