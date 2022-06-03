import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import NewPage from "./pages/newPage/NewPage";
import SinglePage from "./pages/singlePage/SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/darkMode.scss";
import { useContext } from "react";
import { DarkModeContext } from "./contextAPI/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                // Passing userInputs and tilte as props
                element={<NewPage inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  // Passing productInput and tilte as props
                  <NewPage inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
