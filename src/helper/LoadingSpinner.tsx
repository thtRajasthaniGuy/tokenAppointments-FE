import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
      <div className="w-32 h-32 border-t-4 border-b-4 border-green-500 rounded-full animate-spin"></div>
      <h1 className="text-2xl font-bold mt-4 text-green-500">TokenOnGo</h1>
    </div>
  );
};

export default LoadingSpinner;
