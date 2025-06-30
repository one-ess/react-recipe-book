import { Button, Card, CardMedia, ListItem, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getDetails } from "../../store/details/details.slice";
import { useNavigate } from "react-router-dom";

import s from "./MealsItem.module.scss";
const MealsItem = (props) => {
  const { idMeal, strMealThumb, strMeal } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMealClick = (idMeal) => {
    dispatch(getDetails(idMeal));
    navigate(`/meal/${idMeal}`);
  };

  return (
    <ListItem className={s.item}>
      <Card className={s.card}>
        <CardMedia className={s.img} component="img" src={strMealThumb} alt={strMeal} />
        <Typography className={s.title}>{strMeal}</Typography>
        <Button variant="contained" onClick={() => handleMealClick(idMeal)}>
          Рецепт
        </Button>
      </Card>
    </ListItem>
  );
};

export default MealsItem;
