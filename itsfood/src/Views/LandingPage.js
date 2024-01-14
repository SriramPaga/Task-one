import React from 'react';
import { useContext } from 'react';
import { FoodContext } from '../App';
function LandingPage() {
  const { cart } = useContext(FoodContext);
  return (
    <div>
      LandingPage
      {console.log(cart)}
    </div>
  );
}

export default LandingPage;
