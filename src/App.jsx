import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AddPlace from "./pages/AddPlace";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login page opens first */}
        <Route
          path="/"
          element={<Login />}
        />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />


        {/* User Home */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* User pages */}
        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/add-place"
          element={<AddPlace />}
        />

        {/* User login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Admin login */}
        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* Admin dashboard */}
        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* Any unknown URL goes to login */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;