import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemNum = cartCtx.items.reduce(
    (currItem, item) => currItem + item.amount,
    0
  );
  return (
    <button className={classes.button} onClick={props.showModal}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemNum}</span>
    </button>
  );
};

export default HeaderCart;
