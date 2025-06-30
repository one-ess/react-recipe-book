import MainLayout from "../../layout/MainLayout";
import Details from "../Details/Details";
import Catalog from "../Catalog/Catalog";

import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const App = () => {
  const { isLoadingDetails } = useSelector((state) => state.details);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog/:category" element={<Catalog />} />
        <Route path="meal/:meal" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
