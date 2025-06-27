import { CircularProgress } from "@mui/material";
import MainLayout from "../../layout/MainLayout";
import CategoryList from "../CategoryList/CategoryList";
import { useSelector } from "react-redux";

const App = () => {
  const { isLoading } = useSelector((state) => state.categories);

  return <MainLayout>{isLoading ? <CircularProgress /> : <CategoryList />}</MainLayout>;
};

export default App;
