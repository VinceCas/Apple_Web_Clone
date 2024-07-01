import React from "react";
import { getStartedPic } from "../assets";

const GetStartedPU = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[950px] w-[100%] md:h-[580px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col">
          <p className="text-[14px] font-SF-Pro text-black">Getting Started</p>
          <h1 className="text-[38px] font-SF-Pro font-bold  text-black">
            Easy to use. Easy to love.
          </h1>
          <p className="text-[16px] font-SF-Pro text-black my-5">
            Familiar as iPhone. You'll feel right at home on Mac, with many of
            the same apps as iPhone — like Messages, Photos, Notes, and
            FaceTime.
          </p>
          <img
            src={getStartedPic}
            alt="picture"
            className="w-[450px] justify-center mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedPU;
