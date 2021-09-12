import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [error, showError] = useState(false);
  const AmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +AmountRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5) showError(true);
    props.onAdd(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={AmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          defaultValue: 1,
          max: 5,
          step: 1,
        }}
      />
      <button>+ Add</button>
      {error && <p>Please enter an amount from (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
