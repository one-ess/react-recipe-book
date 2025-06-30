import MainLayout from "../../layout/MainLayout";
import Details from "../../pages/Details/Details";
import Catalog from "../../pages/Catalog/Catalog";
import NotFound from "../../pages/NotFound/NotFound";
import Home from "../../pages/Home/Home";

import { Route, Routes } from "react-router-dom";

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
