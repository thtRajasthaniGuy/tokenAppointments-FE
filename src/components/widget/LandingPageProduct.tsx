import React from "react";

const LandingPageProduct: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <iframe
              title="Product Video"
              className="w-full h-100 md:h-auto md:w-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mt-1 text-2xl font-bold text-black lg:mt-2 sm:text-6xl xl:text-2xl">
              Product Overview
            </h1>
            <p className="mt-1 text-4xl font-bold text-black lg:mt-2 sm:text-6xl xl:text-4xl">
              Empowers patients to generate tokens online or through QR codes,
              eliminating the need to wait in line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageProduct;
