import React from "react";
import { Navbar } from "../src/components";

const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    <div className=" justify-center items-center text-center font-SF-Pro font-bold">{children}</div>
  </div>
);

export default MainLayout;
