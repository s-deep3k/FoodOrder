import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addToCartHandler = (item) => {};
  const removeFromCartHandler = (id) => {};
  return (
    <CartContext.Provider
      value={{
        items: [],
        amount: 0,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
