'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useModalContext } from "@/context/ModalContext";
import FirstModal from "@/components/FirstModal";
import SecondModal from "@/components/SecondModal";

import image1 from "../../public/JP1_2174-cover.jpg";
import image2 from "../../public/cover-6.jpg";
import image3 from "../../public/cover1.jpg";
import image4 from "../../public/cover4.jpg";
import image5 from "../../public/cover8.jpg";

export default function App() {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isShowedSecondModal, openNCloseModal } = useModalContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div
        className="relative h-screen overflow-hidden cursor-pointer"
        onClick={() => {
          openNCloseModal();
        }}
      >
        <div
          className={`${isShowedSecondModal ? "opacity-[0.49]  inset-0" : ""}`}
        >
          <Image
            src={images[currentIndex]}
            className="w-full h-full object-cover"
            alt="main images"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="font-necto text-[78px] tracking-tighter font-light text-white">
              Goldsworthy
            </h1>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isShowedSecondModal && (
          <aside>
            <FirstModal />
            <SecondModal />
          </aside>
        )}
      </AnimatePresence>
    </>
  );
}
