import "bootswatch/dist/superhero/bootstrap.min.css";
import { DefaultLayout } from "./pages/layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/login/Login";
import "./app.css";
import { Register } from "./pages/register/Register";
import { Products } from "./pages/products/Products";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
