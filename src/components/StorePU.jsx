import React from "react";
import { appleQR } from "../assets";

const StorePU = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[900px] w-[100%] md:h-[650px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col">
          <p className="text-[18px] font-SF-Pro text-black">Apple Store App</p>
          <h1 className="text-[50px] font-SF-Pro font-bold md:w-[500px] w-auto text-black">
            Shop in the Apple Store app
          </h1>
          <p className="text-[18px] font-SF-Pro text-black my-5">
            Get personalized product recommendations, compare models, access
            Your Saves, and track your orders. Plus, opt in today to get updates
            on new products, promotions, flexible payment options, and store
            events. Scan the QR code to get started.
          </p>
          <img src={appleQR} alt="apple_QR_code" className=" w-[450px] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default StorePU;
