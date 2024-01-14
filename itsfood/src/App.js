import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavHeader from './Components/NavHeader';
import ProductsPage from './Views/ProductsPage';
import LandingPage from './Views/LandingPage';
import CartView from './Views/CartView';
import { createContext, useState } from 'react';
import CheckoutView from './Views/CheckoutView';
import Footer from './Components/Footer';
import PlacedAlert from './Components/PlacedAlert';
export const FoodContext = createContext();
function App() {
  const [cart, setCart] = useState([]);

  function cartAddition(prodId, IncDec = null) {
    const isFound = cart.some((element) => element.id === prodId);
    if (isFound) {
      let newCart = cart.map((item, index) => {
        if (item.id === prodId) {
          if (IncDec === 'Increment') {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            if (item.quantity === 1) {
              return {};
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
        }
        return item;
      });
      newCart = newCart.filter((item) => Object.keys(item).length > 0);
      setCart(newCart);
      console.log(cart);
    } else {
      console.log('else jasti');

      const tempDict = { id: prodId, quantity: 1 };
      setCart([...cart, tempDict]);
    }
  }
  function handleDeleteProduct(prodId) {
    console.log("handle function iin  App js" + prodId)
    let newCart = cart.map((item, index) => {
      if (item.id === prodId) {
        return {};
      }
      return item;
    });
    newCart = newCart.filter((item) => Object.keys(item).length > 0);
    setCart(newCart);
  }

  return (
    <>
      <FoodContext.Provider value={{ cart, cartAddition, handleDeleteProduct }}>
        <BrowserRouter basename='/'>
          <NavHeader />
          <Routes>
           
            <Route path="/" element={<ProductsPage />} />
            <Route path="/Home" element={<ProductsPage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartView />} />
           
            <Route path="/Payment" element={<CheckoutView />} />
            <Route path="/OrderPlaced" element={<PlacedAlert />} />
          
          </Routes>
          <Footer />
        </BrowserRouter>
      </FoodContext.Provider>
    </>
  );
}

export default App;
