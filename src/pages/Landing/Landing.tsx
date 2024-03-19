import React from "react";
import LandingPageHeader from "../../components/header/LandingPage";
import LandingPageSection from "../../components/widget/LandingPageSection";
import LandingPageProduct from "../../components/widget/LandingPageProduct";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <LandingPageHeader />
      <LandingPageSection />
      <LandingPageProduct />
    </div>
  );
};

export default Home;
