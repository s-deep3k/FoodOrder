import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  fprice: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedFprice = state.fprice + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      fprice: updatedFprice,
    };
  }
  if (action.type === "REMOVE") {
    return {
      items: null,
      fprice: null,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatchHandler] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addToCartHandler = (item) => {
    cartDispatchHandler({
      type: "ADD",
      item: item,
    });
  };
  const removeFromCartHandler = (id) => {
    cartDispatchHandler({
      type: "REMOVE",
      id: id,
    });
  };
  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
