import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const [itemChange, itemChangeHandler] = useState(false);
  const { items } = cartCtx;
  const cartItemNum = items.reduce(
    (currItem, item) => currItem + item.amount,
    0
  );
  useEffect(() => {
    if (items.length === 0) return;
    itemChangeHandler(true);
    const timer = setTimeout(() => {
      itemChangeHandler(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button
      className={`${classes.button} ${itemChange ? classes.bump : ""}`}
      onClick={props.showModal}
    >
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemNum}</span>
    </button>
  );
};

export default HeaderCart;
