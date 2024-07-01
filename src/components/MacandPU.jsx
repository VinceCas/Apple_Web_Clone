import React from "react";
import { macBook } from "../assets";

const MacandPU = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[950px] w-[100%] md:h-[580px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col ">
          <p className="text-[14px] font-SF-Pro text-black">Mac and iPhone</p>
          <h1 className="text-[38px] font-SF-Pro font-bold  text-black">
            Dream team.
          </h1>
          <p className="text-[16px] font-SF-Pro text-black my-5">
            Mac answers the call. You can answer calls or messages from your
            iPhone directly on your Mac. All the messages that appear on your
            iPhone appear on your Mac, too.
          </p>
          <img
            src={macBook}
            alt="picture"
            className=" w-[600px] justify-center mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MacandPU;
