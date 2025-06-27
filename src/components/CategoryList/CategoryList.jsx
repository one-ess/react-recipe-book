import { List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { getCategories } from "../../store/category/category.slice";
import { useDispatch, useSelector } from "react-redux";

const CategoryList = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <List>
      {categories.map((category) => {
        return <ListItem key={category.idCategory}>{category.strCategory}</ListItem>;
      })}
    </List>
  );
};

export default CategoryList;
