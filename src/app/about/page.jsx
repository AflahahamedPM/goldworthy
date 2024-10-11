"use client";
import { useModalContext } from "@/context/ModalContext";
import React from "react";
import { AnimatePresence } from "framer-motion";
import FirstModal from "@/components/FirstModal";
import SecondModal from "@/components/SecondModal";
import Link from "next/link";
import { cardsData } from "@/constants/cardData";
import Card from "@/components/Card";

const About = () => {
  const { openNCloseModal, isShowedSecondModal } = useModalContext();
  return (
    <>
      <div
        className={`bg-darkGrey  ${
          isShowedSecondModal ? "cursor-pointer" : "cursor-default"
        } `}
        onClick={isShowedSecondModal ? () => openNCloseModal() : undefined}
      >
        <div className="flex justify-between">
          <Link
            href="/"
            className="text-myGrey font-necto font-light transform -ml-10 mt-28 -rotate-90 text-2xl"
          >
            Goldsworthy
          </Link>
          <h1
            className={`mt-10 mr-80 ${
              isShowedSecondModal ? "cursor-pointer" : "cursor-text"
            } text-myGrey text-4xl leading-[45px]`}
          >
            The design studio is located in the heart of <br /> Auckland, and is
            open by appointment.
          </h1>
          <button
            className="text-myGrey mr-10 flex justify-end mb-10 opacity-[0.7] font-necto fixed right-2 top-9"
            onClick={!isShowedSecondModal ? () => openNCloseModal() : undefined}
          >
            Menu
          </button>
        </div>
        <div className="flex gap-[50px] justify-between pt-[380px] w-9/12 mx-auto bg-red">
          {cardsData.map((data) => (
            <Card
              key={data.number}
              number={data.number}
              title={data.title}
              description={data.description}
              buttonText={data.buttonText}
            />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isShowedSecondModal && (
          <>
            <FirstModal />
            <SecondModal />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
