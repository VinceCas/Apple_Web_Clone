import React from "react";

const GetknowPu = () => {
  return (
    <section
      className={`fade-opacity fixed w-[100%] h-[100%] bg-black bg-opacity-30 border border-white border-opacity-20 backdrop-blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div className=" fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[900px] w-[100%] md:h-[450px] h-[100%] md:px-[50px] px-[10px] py-[50px] rounded-2xl">
        <div className="flex flex-col">
          <p className="text-[18px] font-SF-Pro text-black">
            Online Personal Session
          </p>
          <h1 className="text-[50px] font-SF-Pro font-bold md:w-[500px] w-auto text-black">
            Get to know your new Mac.
          </h1>
          <p className="text-[18px] font-SF-Pro text-black my-5">
            Whether you're new to your Apple device or need a refresher on the
            latest features, schedule a free one-on-one session with a
            Specialist to set up your Mac and get it ready to use. We can show
            you how to get more from the products you love — and even share our
            favorite tips.
          </p>
          <a href="#" className=" text-[16px] font-SF-Pro text-blue-500">
            Learn More &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetknowPu;
