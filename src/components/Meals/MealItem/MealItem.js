import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const CartCtx = useContext(CartContext);
  const addToCart = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price.toFixed(2),
      amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAdd={addToCart} id={props.id}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
