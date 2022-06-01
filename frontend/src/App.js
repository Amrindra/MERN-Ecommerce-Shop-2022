import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  //accessing the currentUser in the redux store. if there is a user redirect to the homepage if not redirect to login
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="products/:category"
          element={
            <>
              <Navbar />
              <Announcement />
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
    </BrowserRouter>
  );
}

export default App;
