import "./App.css";
import Mockman from "mockman-js";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import ProductListing from "./pages/ProductListing/productListing";
import ProductDetails from "./pages/ProductDetails/productDetails";
import Cart from "./pages/Cart/cart";
import Wishlist from "./pages/Wishlist/wishlist";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import RequireAuth from "./components/Auth/requireAuth";
import AccountDetails from "./pages/AccountDetails/accountDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productID" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account-details" element={<AccountDetails />} />
      </Routes>
    </div>
  );
}

export default App;
