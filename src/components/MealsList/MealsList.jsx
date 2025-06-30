import { List } from "@mui/material";
import { useSelector } from "react-redux";
import MealsItem from "../MealsItem/MealsItem";

import s from "./MealsList.module.scss";

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
