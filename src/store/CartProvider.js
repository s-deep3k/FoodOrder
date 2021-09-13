import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  fprice: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const sameItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const sameItem = state.items[sameItemIndex];
    let updatedItem;
    let updatedItems;
    if (sameItem) {
      updatedItem = {
        ...sameItem,
        amount: sameItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[sameItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedFprice = state.fprice + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      fprice: updatedFprice,
    };
  }
  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const item = state.items[itemIndex];
    let updatedItem;
    let updatedItems;
    if (item && item.amount > 1) {
      updatedItem = {
        ...item,
        amount: item.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    const updatedFprice = state.fprice - item.price;
    return {
      items: updatedItems,
      fprice: updatedFprice,
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
