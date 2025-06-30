import { useDispatch, useSelector } from "react-redux";
import s from "./Details.module.scss";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../store/details/details.slice";

const Details = () => {
  const { details, error } = useSelector((state) => state.details);
  const meal = details[0];

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!details.length) {
      dispatch(getDetails(params.meal));
    }
  }, []);

  if (!error && !meal) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const getIngredients = () => {
    let i = 1;

    const ingredients = Object.keys(meal).reduce((acc, key) => {
      if (key === `strIngredient${i}` && meal[key]) {
        acc[meal[key]] = meal[`strMeasure${i}`].trim();
        i++;
      }
      return acc;
    }, {});

    return ingredients;
  };

  const ingredients = getIngredients();

  return (
    <div className={s.card}>
      <h2 className={s.title}>{meal.strMeal}</h2>
      <img className={s.img} src={meal.strMealThumb} alt={meal.strMeal} />
      <span className={s.category}>Category: {meal.strCategory}</span>
      <span className={s.area}>Area: {meal.strArea}</span>
      <p className={s.text}>{meal.strInstructions}</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell>Measure</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(ingredients).map((key) => {
              return (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{ingredients[key]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  );
};

export default Details;
