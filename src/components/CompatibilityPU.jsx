import React from "react";
import { compaPic } from "../assets";

const CompatibilityPU = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[950px] w-[100%] md:h-[580px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col">
          <p className="text-[14px] font-SF-Pro text-black">Compatibility</p>
          <h1 className="text-[38px] font-SF-Pro font-bold  text-black">
            Mac runs your favorite apps.
          </h1>
          <p className="text-[16px] font-SF-Pro text-black my-5">
            The apps you love. Right on your Mac. From Microsoft 365 to Adobe
            Creative Cloud to Zoom,1 all your go-to apps are superfast and
            snappy on Mac.
          </p>
          <img
            src={compaPic}
            alt="picture"
            className="w-[500px] justify-center mx-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CompatibilityPU;
