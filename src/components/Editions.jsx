import { useModalContext } from "@/context/ModalContext";
import Image from "next/image";
import React, { useState } from "react";

const Editions = ({ id, title, imageUrl }) => {
  const [showImage, setShowImage] = useState(false);
  const { isShowedSecondModal } = useModalContext();
  return (
    <div
      className={`relative flex ${
        isShowedSecondModal ? "cursor-pointer" : "cursor-text"
      }`}
      onMouseEnter={!isShowedSecondModal ? () => setShowImage(true) : undefined}
      onMouseLeave={!isShowedSecondModal ? () => setShowImage(false) : undefined}
      
    >
      <h1 className="text-myGrey text-[64px]">{title}</h1>
      <h1 className="text-myGrey text-lg">{id}</h1>
      {showImage && (
        <Image
          src={imageUrl}
          alt="Edition-Img"
          className="absolute z-10 top-0 left-28 w-auto h-[350px]"
        />
      )}
    </div>
  );
};

export default Editions;
