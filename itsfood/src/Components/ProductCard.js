import React from 'react';
import Data from '../JSONData/data.json';
import Button from './Button';
import { useContext } from 'react';
import { FoodContext } from '../App';
import CounterButton from './CounterButton';
function ProductCard(props) {
  const { cart } = useContext(FoodContext);

  return (
    <div className=" lg:flex">
      {/* <div
        class="h-52 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
    
      >
      </div> */}
      {Data.map((itemData, index) => {
        let isFound = false
         isFound = cart.some((element) => element.id === itemData.id);
        
        return (
          <div className="lg:min-w-48 md:min-w-full border mx-1 my-1 border-l-2 border-neutral-600  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-6">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {itemData.productName}
              </div>
              <p class="text-gray-700 text-base">
                {itemData.productDescription}
              </p>
            </div>

            {isFound ? (
              <CounterButton prodId={itemData.id} />
              
            ) : (
              <Button bgcolor={'bg-red-500'} prodId={itemData.id} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
