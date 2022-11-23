import "bootswatch/dist/minty/bootstrap.min.css";
import { DefaultLayout } from "./pages/layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/login/Login";
import "./app.css";
import { Register } from "./pages/register/Register";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
