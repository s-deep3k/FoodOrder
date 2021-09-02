import React from "react"
import classes from "./Header.module.css"
import mealImage from "../../assets/meals.jpg"

const Header = props =>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <img className ={classes["main-image"]} src={mealImage} alt="Very delicious food!"></img> 
        </React.Fragment>
    )
}

export default Header