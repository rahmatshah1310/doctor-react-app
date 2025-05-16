import "./App.css";
import LandingPage from "@pages/LandingPage";
import Signup from "@pages/Signup";
import Login from "@pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "@constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.landingpage} element={<LandingPage />} />
        <Route path={ROUTES.signup} element={<Signup />} />
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
