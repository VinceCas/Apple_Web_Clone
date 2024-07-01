import React from "react";
import { compaPic, privacyPic } from "../assets";

const PrivacyPU = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[950px] w-[100%] md:h-[580px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col">
          <p className="text-[14px] font-SF-Pro text-black">
            Privacy and Security
          </p>
          <h1 className="text-[38px] font-SF-Pro font-bold  text-black">
            Your business is nobody else's.
          </h1>
          <p className="text-[16px] font-SF-Pro text-black my-5">
            You are your own password. Touch ID keeps all your passwords at the
            tip of your finger. So you can use it to unlock your Mac, access
            passkeys, and make payments.
          </p>
          <img
            src={privacyPic}
            alt="picture"
            className="w-[500px] justify-center mx-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPU;
