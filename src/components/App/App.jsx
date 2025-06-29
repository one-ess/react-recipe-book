import MainLayout from "../../layout/MainLayout";
import Details from "../Details/Details";
import Catalog from "../Catalog/Catalog";

import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home";

const App = () => {
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
