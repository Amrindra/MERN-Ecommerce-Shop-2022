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

function App() {
  const user = false;

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
