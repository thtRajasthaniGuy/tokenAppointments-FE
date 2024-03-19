import React from "react";
import LandingPageHeader from "../../components/header/LandingPage";
import LandingPageSection from "../../components/widget/LandingPageSection";
import LandingPageProduct from "../../components/widget/LandingPageProduct";
import Pricing from "../../components/widget/LandingPagePrice";
import LandingPageFooter from "../../components/widget/LandingPageFooter";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <LandingPageHeader />
      <LandingPageSection />
      <LandingPageProduct />
      <Pricing />
      <LandingPageFooter />
    </div>
  );
};

export default Home;
