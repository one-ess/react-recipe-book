import { ButtonBase, CardMedia, ListItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveCategory } from "../../store/category/category.slice";

import s from "./CategoryItem.module.scss";

const CategoryItem = (props) => {
  const { strCategoryThumb, strCategory } = props;
  const { activeCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCategoryClick = (strCategory) => {
    dispatch(setActiveCategory(strCategory));
    navigate(`/catalog/${strCategory}`);
  };

  return (
    <ListItem className={`${s.item} ${strCategory === activeCategory ? s.itemActive : ""}`}>
      <ButtonBase className={s.card} component="div" onClick={() => handleCategoryClick(strCategory)} disabled={strCategory === activeCategory}>
        <CardMedia className={s.img} component="img" src={strCategoryThumb} alt={strCategory} />
        <Typography className={s.title}>{strCategory}</Typography>
      </ButtonBase>
    </ListItem>
  );
};

export default CategoryItem;
