import { List } from "@mui/material";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";

import s from "./CategoryList.module.scss";

const CategoryList = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <List className={s.list}>
      {categories.map((category) => {
        return <CategoryItem key={category.idCategory} {...category}></CategoryItem>;
      })}
    </List>
  );
};

export default CategoryList;
