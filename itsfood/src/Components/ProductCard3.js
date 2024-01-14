import React from 'react';
import Button from './Button';
import CounterButton from './CounterButton';

function ProductCard3(props) {
  const itemData = props.itemData;
  const isFound = props.isFound;
  return (
    // <section class="py-10 bg-gray-100">
    //   <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div class="container relative overflow-clip rounded-xl justify-center">
        <img src={itemData.image} className="rounded" alt="Hotel Photo" />
      </div>

      <div class="mt-1 p-2">
        <h2 class="text-slate-700"> {itemData.productName}</h2>
        <p class="mt-1 text-sm text-slate-400">{itemData.productDescription}</p>

        <div class="mt-4 flex items-end justify-between align-bottom">
          <p class="text-lg font-bold text-black-500">₹{itemData.price}</p>
          <div class="flex">
            {isFound ? (
              <CounterButton prodId={itemData.id} />
            ) : (
              <Button bgcolor={'bg-red-500'} prodId={itemData.id} />
            )}
          </div>
        </div>
      </div>
    </article>
    //   </div>
    // </section>
  );
}

export default ProductCard3;
