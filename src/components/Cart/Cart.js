import React, { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const [isCheckout, setCheckout] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const orderHandler = () => {
    setCheckout(true);
  };
  const cancelHandler = () => {
    setCheckout(false);
    props.onClose();
  };
  const CartCtx = useContext(CartContext);
  const hasItems = CartCtx.items.length > 0;
  console.log(CartCtx.items);
  console.log(CartCtx.fprice);
  const addToCart = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };
  const removeFromCart = (id) => {
    CartCtx.removeItem(id);
  };
  const submitOrderHandler = (userData) => {
    setSubmitting(true);
    fetch(
      "https://react-js-cd1f3-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: CartCtx.items,
        }),
      }
    )
      .then()
      .catch((err) => console.log(err))
      .finally((_) => {
        setSubmitting(false);
        setDidSubmit(true);
      });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addToCart.bind(null, item)}
          onRemove={removeFromCart.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>${CartCtx.fprice.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onClose={cancelHandler} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};
export default Cart;
