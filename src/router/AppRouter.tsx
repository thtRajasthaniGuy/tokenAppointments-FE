import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "../pages/Landing/Landing";
import LoginPage from "../pages/Login/Login";
import SignupPage from "../pages/Signup/Signup";
import DoctorLogin from "../pages/DoctorLogin/DoctorLogin";
import ClinicDashboard from "../pages/ClinicDashboard/ClinicDashboard";
import DoctorDashboard from "../pages/DoctorDashboard/DoctorDashboard";

const AppRouter: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); // 'clinic' or 'doctor'
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);
  // Function to handle login
  const handleLogin = (role: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem("role", role); // Store role in local storage
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn && userRole === "clinic" ? (
              <ClinicDashboard />
            ) : userRole === "doctor" ? (
              <DoctorDashboard />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage onSignup={handleLogin} />} />
        <Route
          path="/doctor-login"
          element={<DoctorLogin onLogin={handleLogin} />}
        />
        <Route path="/dashboard" element={<ClinicDashboard />} />
        {/* <Route
          path="/clinic-dashboard"
          element={isLoggedIn && userRole === 'clinic' ? <ClinicDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/doctor-dashboard"
          element={isLoggedIn && userRole === 'doctor' ? <DoctorDashboard /> : <Navigate to="/" />}
        /> */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
