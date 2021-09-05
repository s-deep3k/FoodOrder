import React from "react"

import classes from "./HeaderCart.module.css"
import CartIcon from "../Cart/CartIcon"
const HeaderCart = props =>{    
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCart