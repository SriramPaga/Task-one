import React from 'react';
import ProductCard from '../Components/ProductCard3';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FoodContext } from '../App';
import { useContext } from 'react';
import Data from '../JSONData/data.json';

function ProductsPage() {
  const { cart } = useContext(FoodContext);
  return (
    <>
      <section class="py-10 bg-gray-100">
        <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Data.map((itemData, index) => {
            let isFound = false;
            isFound = cart.some((element) => element.id === itemData.id);
            return <ProductCard itemData={itemData} isFound={isFound} />;
          })}
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
