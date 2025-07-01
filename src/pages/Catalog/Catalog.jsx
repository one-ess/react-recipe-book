import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../../components/CategoryList/CategoryList";
import MealsList from "../../components/MealsList/MealsList";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { getMeals } from "../../store/meals/meals.slice";
import { getCategories } from "../../store/category/category.slice";
import { useNavigate, useParams } from "react-router-dom";

const Catalog = () => {
  const { isLoadingCategories, activeCategory, categories } = useSelector((state) => state.categories);
  const { isLoadingMeals } = useSelector((state) => state.meals);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, []);

  useEffect(() => {
    if (!categories.length || activeCategory) return;

    const category = categories.find((category) => category.strCategory === params.category);
    const categoryFromURL = category ? category.strCategory : "Beef";

    dispatch(getMeals(categoryFromURL));
    navigate(`/catalog/${categoryFromURL}`);
  }, [categories]);

  return (
    <>
      {isLoadingCategories ? <CircularProgress /> : <CategoryList />}
      {isLoadingMeals ? <CircularProgress /> : <MealsList />}
    </>
  );
};

export default Catalog;
