import React from "react";

const ShopPU = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[900px] w-[100%] md:h-[450px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col">
          <p className="text-[18px] font-SF-Pro text-black">
            Guided video shopping
          </p>
          <h1 className="text-[50px] font-SF-Pro font-bold md:w-[600px] w-auto text-black">
            Shop live with a Specialist.
          </h1>
          <p className="text-[18px] font-SF-Pro text-black my-5">
            We can help you choose the product you need while guiding you
            through the online Apple Store. Available 7 a.m.—7 p.m. PT Supported
            by SignTime Available 5 a.m.—9 p.m. PT Call us at 1-800-MY-APPLE
            Available 5 a.m.—9 p.m. PT
          </p>
          <a href="#" className=" text-[16px] font-SF-Pro text-blue-500">
            Shop Together with Specialist &gt;
          </a>
          <h1 className="text-[20px] font-SF-Pro font-bold md:w-[600px] w-auto mt-3 text-black">
          Other ways to shop with a Specialist
          </h1>
          <a href="#" className=" text-[16px] font-SF-Pro text-blue-500">
            Chat with us online &gt;
          </a>
          <a href="#" className=" text-[16px] font-SF-Pro text-blue-500">
            Sign with us online &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopPU;
