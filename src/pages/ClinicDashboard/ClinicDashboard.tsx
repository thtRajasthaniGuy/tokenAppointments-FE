import React, { useEffect, useState } from "react";
import ClinicDashboardNavBar from "../../components/app/DashboardNavBar/ClinicDashboardNavBar";
import DoctorCard from "../../components/widget/DoctorCard";
import DashboardHeader from "../../components/header/DashboardHeader";
import AxiosInstance from "../../config/axios";
import { ApiEndPoints } from "../../constants/api-end-points";
import { notify } from "../../helper/toast";
import LoadingSpinner from "../../helper/LoadingSpinner";

const ClinicDashboard: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [clinicId, setClinicId] = React.useState(
    localStorage.getItem("clinicId")
  );
  const [doctorList, setDoctorList] = React.useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);
  const getDoctorList = () => {
    setLoading(true);
    AxiosInstance.get(`${ApiEndPoints.getAllDoctorToken}/${clinicId}`)
      .then((response: any) => {
        console.log(response);
        setDoctorList(response?.data);
      })
      .catch((error) => {
        console.log(error);

        notify(
          error?.msg
            ? error?.msg
            : "something went wrong, please try again later",
          "error"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      <ClinicDashboardNavBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className={`mt-1 ${isMenuOpen ? "ml-64" : "ml-20"}`}>
        {!isMenuOpen && <DashboardHeader />}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {doctorList.map((doctor: any, index) => {
              return (
                <DoctorCard
                  key={index}
                  doctorName={doctor?.doctorName}
                  currentToken={doctor?.currentToken}
                  totalToken={doctor?.totalToken}
                  isAvailable={true}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicDashboard;
