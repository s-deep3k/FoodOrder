import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart, setshowCart] = useState(false);
  const showController = (_) => {
    setshowCart(true);
  };
  const hideController = (_) => {
    setshowCart(false);
  };
  return (
    <React.Fragment>
      {showCart && <Cart onClose={hideController} />}
      <Header showModal={showController}></Header>
      <Meals></Meals>
    </React.Fragment>
  );
}

export default App;
