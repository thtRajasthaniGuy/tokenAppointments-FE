import React from "react";

interface DoctorCardProps {
  doctorName: string;
  currentToken: number;
  totalToken: number;
  isAvailable: boolean;
}
const DoctorCard = ({
  doctorName,
  currentToken,
  totalToken,
  isAvailable,
}: DoctorCardProps) => {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {doctorName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Current Token: {currentToken}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Total Token: {totalToken}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Is Available Today: {isAvailable ? "Yes" : "No"}
      </p>
    </a>
  );
};

export default DoctorCard;
