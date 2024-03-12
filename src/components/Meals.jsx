import { useEffect, useState } from "react";
import MealsItem from "./MealItem";
import useHttp from "../Hooks/useHTTP";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  if (isLoading) {
    return <p className="center">Fetching meals.....</p>;
  }
  if (error) {
    return <Error title="failed to fetch meals" message={error} />;
  }
  //   useEffect(() => {
  //     async function fetchMeals() {
  //       const response = await fetch("http://localhost:3000/meals", {
  //         method: "GET",
  //       });
  //       if (!response.ok) {
  //         // ...
  //       }
  //       const meals = await response.json();
  //       setLoadMeals(meals);
  //     }
  //     fetchMeals();
  //   }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsItem key={meal.id} meal={meal}></MealsItem>
      ))}
    </ul>
  );
}
