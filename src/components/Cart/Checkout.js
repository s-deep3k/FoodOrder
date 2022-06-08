import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
export const Checkout = (props) => {
  const [formValidity, setValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const nameIsValid = !isEmpty(nameRef.current.value);
    const streetIsValid = !isEmpty(streetRef.current.value);
    const postalIsValid = isFiveChars(postalRef.current.value);
    const cityIsValid = !isEmpty(cityRef.current.value);

    setValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });
    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;
    if (!formIsValid) return;
    props.onConfirm({
      name: nameRef.current.value,
      street: streetRef.current.value,
      postalCode: postalRef.current.value,
      city: cityRef.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidity.name && <p>Name is Invalid!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formValidity.postal && <p>Postal is Invalid!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};
