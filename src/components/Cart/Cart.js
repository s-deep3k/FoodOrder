import React from 'react'
import classes from './Cart.module.css'
const Cart = props=>{
    const cartItems = <ul>
        [{id: 1,name: 'Sushi',price:2.99},{}].map(item => <li>{item.name}</li>)
    </ul>
    return(
        <React.Fragment>
        <div>
            {cartItems}
        </div>
        <div className={classes.total}>
            <span>Total</span>
            <span>32.99</span>
        </div>
        <div className={classes.actions}>
            <button>Close</button>
            <button>Order</button>
        </div>
        </React.Fragment>
    )
} 
 export default Cart