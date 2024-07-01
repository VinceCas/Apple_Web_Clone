import React from "react";
import styles from "../style";
import { studioD, camera, display } from "../assets";
import { studioD1 } from "../constants";

const StudioD = () => (
  <div
    className={`${styles.flexCenter} ${styles.paddingY} flex-col fade-opacity`}
  >
    <img
      src={studioD}
      alt="mac13"
      className="md:h-full md:w-full h-auto w-auto mt-[80px]"
    />

    <div>
      <ul className="items-center justify-center">
        {studioD1.map((studioD1) => (
          <li key={studioD.id}>
            <h1 className="text-center font-SF-Pro font-bold md:text-[28px] text-[20px] mt-20">
              {studioD1.name}
            </h1>
            <p className=" mt-5 text-center justify-center w-[300px]">
              {studioD1.p}
            </p>
            <p className=" mt-5 font-SF-Pro font-bold text-center md:text-[16px] text-[14px]">
              {studioD1.price}
            </p>
          </li>
        ))}
        <div className=" mt-20 items-center justify-center text-center mb-20">
          <button className=" bg-blue-600 text-white font-SF-Pro text-[16px] px-8 py-2 rounded-full">
            Learn more
          </button>
          <button className=" bg-white text-blue-600 font-SF-Pro text-[16px] px-10 py-2 rounded-full">
            Buy &gt;
          </button>
        </div>
        <div className="flex text-center items-center justify-center w-[300px] flex-col">
          <div className="flex flex-col items-center mt-14">
            <h1 className=" font-SF-Pro font-bold text-[26px] text-center">
              27”
            </h1>
            <p className=" text-[14px]">
              Retina display with 5120 by 2880 pixels9
            </p>
          </div>
          <div className="flex flex-col items-center mt-14">
            <h1 className=" font-SF-Pro font-bold text-[26px] text-center">
              5K
            </h1>
            <p className=" text-[14px]">
              Retina display for gorgeous color and spectacular detail
            </p>
          </div>
          <div className="flex flex-col items-center mt-14">
            <h1 className=" font-SF-Pro font-bold text-[26px] text-center">
              600 nits
            </h1>
            <p className=" text-[14px]">brightness for brilliant color</p>
          </div>
          <div className="flex flex-col items-center mt-14">
            <img
              src={camera}
              alt="m2chip"
              className="flex flex-col items-center mt-14 h-[60px]"
            />
            <p className=" text-[14px]">
              12MP Ultra Wide camera with Center Stage for more natural video
              calls
            </p>
          </div>
          <div className="flex flex-col items-center mt-14">
            <img
              src={display}
              alt="m2chip"
              className="flex flex-col items-center mt-14 h-[60px]"
            />
            <p className=" text-[14px]">
              True Tone, anti-reflective coating, and a nano-texture glass
              option for optimal viewing in any light
            </p>
          </div>
          <div className="flex flex-col items-center mt-14">
            <h1 className=" font-SF-Pro font-bold text-[26px] text-center">
              4 ports
            </h1>
            <p className=" text-[14px]">Thunderbolt 3 USB-C, 3x USB-C</p>
          </div>
        </div>
      </ul>
    </div>
  </div>
);

export default StudioD;
