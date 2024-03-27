import React from "react";
import moment from "moment";

const DashboardHeader: React.FC = () => {
  const today = moment().format("MMMM Do YYYY");

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow mb-5">
      <h1 className="text-xl font-bold text-gray-900">Clinic Name</h1>
      <div className="flex items-center">
        <span className="mr-4 text-gray-600">{today}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158l-1-1.732a4.065 4.065 0 00-1-1.732V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v3.694a4.065 4.065 0 00-1 1.732l-1 1.732a2.032 2.032 0 01-1.595.763L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      </div>
    </header>
  );
};

export default DashboardHeader;
