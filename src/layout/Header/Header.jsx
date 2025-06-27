import s from "./Header.module.scss";
import { AppBar, Toolbar, Box, Typography, Button, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar className={s.header} position="static" color="default" elevation={1}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Typography variant="h5" component="h1">
            React Recipe Book
          </Typography>
          <Button variant="contained" color="primary">
            Repo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
