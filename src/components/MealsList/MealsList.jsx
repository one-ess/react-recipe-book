import { List } from "@mui/material";
import { useSelector } from "react-redux";

import s from "./MealsList.module.scss";
import MealsItem from "../MealsItem/MealsItem";

const MealsList = () => {
  const { meals } = useSelector((state) => state.meals);

  return (
    <List className={s.list}>
      {meals.map((meal) => {
        return <MealsItem key={meal.idMeal} {...meal}></MealsItem>;
      })}
    </List>
  );
};

export default MealsList;
