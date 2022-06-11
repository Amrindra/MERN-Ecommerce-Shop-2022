import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  //accessing the currentUser in the redux store. if there is a user redirect to the homepage if not redirect to login
  const user = useSelector((state) => state.user.currentUser);

  function ScrollToTop(props) {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  }

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products/:category"
            element={
              <>
                <Navbar />
                <ProductList />
              </>
            }
          />
          <Route path="product/:id" element={<SingleProduct />} />

          <Route
            path="register"
            element={<>{user ? <Navigate to="/" /> : <Register />}</>}
          />
          <Route
            path="login"
            element={<>{user ? <Navigate to="/" /> : <Login />}</>}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
