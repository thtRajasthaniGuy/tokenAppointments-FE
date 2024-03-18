import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "../pages/Landing/Landing";

const AppRouter: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <LandingPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <LandingPage /> : <Navigate to="/" />}
        />
        <Route
          path="/settings"
          element={isLoggedIn ? <LandingPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
