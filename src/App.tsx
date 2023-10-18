import Main from "./pages/mainLayout";
import NavBar from "./components/layouts";
import "./App.css";
import { useAppDispatch } from "./hooks/redux-custom-hooks/hooks";
import { useEffect } from "react";
import { fetchCategories } from "./state/features/categoriesSlice/categoriesSlice";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
