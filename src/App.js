import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setshowCart] = useState(false);
  const showController = (_) => {
    setshowCart(true);
  };
  const hideController = (_) => {
    setshowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideController} />}
      <Header showModal={showController}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
