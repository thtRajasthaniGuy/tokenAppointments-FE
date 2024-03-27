import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface ClinicDashboardNavBarProps {
  setIsMenuOpen: any;
  isMenuOpen: boolean;
}

const ClinicDashboardNavBar = ({
  setIsMenuOpen,
  isMenuOpen,
}: ClinicDashboardNavBarProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const MenuItem = ({ text, onClick, backgroundColor }: any) => {
    return (
      <div className="mt-5">
        <button
          className={`bg-${backgroundColor}-500 text-black hover:bg-blue-500 hover:text-white px-4 py-2 rounded`}
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    );
  };
  return (
    <div className="relative">
      <div
        className="cursor-pointer absolute top-4 left-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : "rotate-0"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
          style={{ marginTop: "0.25rem" }}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
          }`}
          style={{ marginTop: "0.25rem" }}
        ></div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-20  left-0 w-full bg-white-100 py-4">
          <ul className="text-xl text-black ml-4">
            <MenuItem text="Clinic Info" />
            <MenuItem text="Doctor" />
            <MenuItem text="Services" />
            <MenuItem text="Contact" />
            <MenuItem
              text="Logout"
              backgroundColor="red"
              onClick={handleLogout}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClinicDashboardNavBar;
