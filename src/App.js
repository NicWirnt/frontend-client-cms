import "bootswatch/dist/cerulean/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/login/Login";
import "./app.css";
import { Register } from "./pages/register/Register";
import { Products } from "./pages/products/Products";
import { ProductLanding } from "./pages/products/ProductLanding";

import { ProductByCat } from "./pages/products/ProductByCat";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { EmailVerification } from "./pages/emailVeirfiy/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./pages/checkout/Payment";
const App = () => {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#f8f5fc",
      }}
    >
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:_id" element={<ProductLanding />} />
          <Route path="/category/:_id" element={<ProductByCat />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/payment" element={<Payment />} />

          <Route path="/user/verify-email" element={<EmailVerification />} />
          <Route path="*" element={<h1>404 page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
