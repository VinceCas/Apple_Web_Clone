import React from "react";
import { performancePic } from "../assets";

const PerformancePU = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[950px] w-[100%] md:h-[580px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col ">
          <p className="text-[14px] font-SF-Pro text-black">
            Performance and Battery Life
          </p>
          <h1 className="text-[38px] font-SF-Pro font-bold  text-black">
            Go fast. Go far.
          </h1>
          <p className="text-[16px] font-SF-Pro text-black my-5">
            Supercharged by Apple silicon. Apple silicon brings game-changing
            power and speed to Mac. It integrates the CPU, GPU, and Neural
            Engine onto a single power-efficient chip, accelerating everything
            you do.
          </p>
          <img
            src={performancePic}
            alt="picture"
            className=" w-[500px] mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default PerformancePU;
