import React from "react";
import LandingPageHeader from "../../components/header/LandingPage";
import LandingPageSection from "../../components/widget/LandingPageSection";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <LandingPageHeader />
      <LandingPageSection />
    </div>
  );
};

export default Home;
