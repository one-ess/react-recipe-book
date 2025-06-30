import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { AppBar, Box, Typography, Button, Container } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const { activeCategory } = useSelector((state) => state.categories);

  return (
    <AppBar className={s.header} elevation={3}>
      <Container className="container">
        <Box className={s.wrapper}>
          <Typography variant="h5" component="h1">
            React Recipe Book
          </Typography>
          <Box className={s.actions}>
            <Link className={s.link} to="/" variant="contained">
              Главная
            </Link>
            <Link className={s.link} to={`/catalog/${activeCategory ? activeCategory : "Beef"}`} variant="contained">
              Каталог
            </Link>
          </Box>
          <Button className={s.button} variant="contained">
            Repo
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
