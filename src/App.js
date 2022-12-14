import "bootswatch/dist/superhero/bootstrap.min.css";
import { DefaultLayout } from "./pages/layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/login/Login";
import "./app.css";
import { Register } from "./pages/register/Register";
import { Products } from "./pages/products/Products";
import { ProductLanding } from "./pages/products/ProductLanding";
import { Category } from "./pages/categories/Category";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:_id" element={<ProductLanding />} />
          <Route path="/category/:_id" element={<Category />} />
          <Route path="*" element={<h1>404 page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
