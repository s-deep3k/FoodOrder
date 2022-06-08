import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [httpError, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-js-cd1f3-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const loadedMeals = [];
        for (const key in res) {
          loadedMeals.push({
            id: key,
            name: res[key].name,
            description: res[key].description,
            price: res[key].price,
          });
        }
        setLoading(false);
        setError(null);
        setMeals(loadedMeals);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something Went Wrong!!! " + err);
      });
  }, []);
  const meals = Meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      price={meal.price}
      description={meal.description}
      name={meal.name}
    ></MealItem>
  ));
  return (
    <>
      {isLoading && (
        <section className={classes.MealsLoading}>
          <p>Loading....Please wait!</p>
        </section>
      )}
      {httpError && (
        <section className={classes.LoadingError}>
          <p>{httpError}</p>
        </section>
      )}
      {!isLoading && httpError === null && (
        <section className={classes.meals}>
          <Card>
            <ul>{meals}</ul>
          </Card>
        </section>
      )}
    </>
  );
};

export default AvailableMeals;
