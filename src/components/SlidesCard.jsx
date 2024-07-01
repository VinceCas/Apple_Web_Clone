import React from "react";
import styles from "../style";
import { cards } from "../constants";
import { useState } from "react";
import { close } from "../assets";
import GetStartedPU from "./GetStartedPU";
import PerformancePU from "./PerformancePU";
import MacandPU from "./MacandPU";
import CompatibilityPU from "./CompatibilityPU";
import PrivacyPU from "./PrivacyPU";
import Durability from "./Durability";
import Values from "./Values";

const SlidesCard = () => {
  const modalLinks = [
    <GetStartedPU />,
    <PerformancePU />,
    <MacandPU />,
    <CompatibilityPU />,
    <PrivacyPU />,
    <Durability />,
    <Values />
  ];

  const [modal, setModal] = useState(null);

  const toggleModal = () => {
    setModal(null);
  };

  return (
    <section className={` md:pl-20 pl-8 ${styles.paddingY}`}>
      <h1
        className={`font-SF-Pro font-bold md:text-[55px] text-[28px] md:mb-20 mb-10`}
      >
        Get to know Mac.
      </h1>
      <div
        className="scroll-container overflow-x-auto"
        style={{
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "overflow-y": "hidden",
        }}
      >
        <ul className="flex gap-6 py-10 px-3" style={{ position: "relative" }}>
          {cards.map((card, index) => (
            <li
              key={card.title}
              className="flex-shrink-0 overflow-hidden hover:scale-[102%] transition-transform duration-500 ease-in-out"
              style={{ position: "relative" }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModal(index);
                }}
                style={{ display: "block", position: "relative" }}
              >
                <img
                  className="md:h-[680px] h-[530px] w-full rounded-[30px] "
                  src={card.img}
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col justify-start items-start m-6">
                  <h1
                    className={`text-[19px] font-SF-Pro ${
                      index === 2 || index === 3 || index === 6 || index === 5
                        ? " text-black"
                        : "text-white"
                    }`}
                  >
                    {card.title}
                  </h1>
                  <p
                    className={`text-[26px] font-SF-Pro font-bold ${
                      index === 2 || index === 3 || index === 6 || index === 5
                        ? " text-black"
                        : "text-white"
                    }`}
                  >
                    {card.p}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {modal !== null && (
        <button>
          <img
            src={close}
            alt="closeBTN"
            className={`fixed md:top-[12%] top-[2%] z-20 w-[18px] h-[18px] md:left-[82%] left-[90%] `}
            onClick={toggleModal}
          />
        </button>
      )}
      {modal !== null && modalLinks[modal]}
    </section>
  );
};

export default SlidesCard;
