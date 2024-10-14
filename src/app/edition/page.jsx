"use client";
import React from "react";
import { useModalContext } from "@/context/ModalContext";
import { AnimatePresence } from "framer-motion";
import FirstModal from "@/components/FirstModal";
import SecondModal from "@/components/SecondModal";
import { editions } from "@/constants/limitedEdition";
import Editions from "@/components/Editions";
import Footer from "@/components/Footer";

const Edition = () => {
  const { isShowedSecondModal, openNCloseModal } = useModalContext();
  return (
    <>
      <div
        className={`bg-darkGrey h-screen overflow-y-hidden ${
          isShowedSecondModal ? "cursor-pointer" : "cursor-default"
        }`}
        onClick={isShowedSecondModal ? () => openNCloseModal() : undefined}
      >
        <div className="flex justify-end">
          <button
            className="text-myGrey mr-10 mt-9 mb-10 opacity-[0.7] text-sm font-necto"
            onClick={!isShowedSecondModal ? () => openNCloseModal() : undefined}
          >
            Menu
          </button>
        </div>
        <div className="flex flex-wrap justify-start w-11/12 mx-auto h-[450px]">
        {
          editions.map((item)=>(
            <Editions key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl}/>
          ))
        }
        </div>
        <Footer />
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

export default Edition;
