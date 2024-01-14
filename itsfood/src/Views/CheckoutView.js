import React, { useContext, useState } from 'react';
import CheckoutForm from '../Components/CheckoutForm';
import OrderSummary from '../Components/OrderSummary.js';
import CartProduct from '../Components/CartProduct';
import CheckoutProduct from '../Components/CheckoutProduct';
import { FoodContext } from '../App';
import Data from '../JSONData/data.json';

function CheckoutView() {
  const { cart } = useContext(FoodContext);

  let grandTotal = 0;
  let totalPrice = 0;
  const shippingCost = 5;
  const displayDivision = (
    <div className="h-full  bg-red-400 p-2 rounded-l-md ">
      {cart.map((item, index) => {
        let foodData;
        {
          Data.map((element, i) => {
            if (item.id === element.id) {
              foodData = element;
              console.log(foodData);
              console.log(element);
            }
          });
        }
        totalPrice = totalPrice + foodData.price * item.quantity;
        {
          grandTotal = totalPrice + shippingCost;
        }
        return (
          <CheckoutProduct
            foodData={foodData}
            item={item}
            // totalPrice={totalPrice}
          />
        );
      })}
    </div>
  );
  //   totalPrice = totalPrice + foodData.price * item.quantity;
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="contaiiner flex justify-center">
          <CheckoutForm grandtotal={grandTotal} />
        </div>
        {displayDivision}
      </div>
    </>
  );
}

export default CheckoutView;
