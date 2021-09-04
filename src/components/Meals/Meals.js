import React from "react";
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"
const Meals = (_) => {
  return <React.Fragment>
    <MealsSummary/>
    <AvailableMeals/>
  </React.Fragment>
};

export default Meals;
