import { motion } from "framer-motion";
import { memo } from "react";
import { useModalContext } from "@/context/ModalContext";
import Link from "next/link";

const SecondModal = memo(() => {
  const {handleClick} = useModalContext()
  return (
    <motion.div
      className=" inset-0 fixed w-[28%] bg-darkGrey"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut", 
        delay: 0.6
      }}
    >
      <div className="flex h-[340px] justify-between">
        <Link href="/" className="text-white font-necto font-light transform ml-40 -mt-24 -rotate-90 text-2xl">
          Goldsworthy
        </Link>
        <h1 className="text-white font-necto font-medium p-6 text-6xl">01</h1>
      </div>
      <nav onClick={(e) => handleClick(e)}>
        <h1 className="w-9/12 flex justify-start mx-auto font-necto text-myGrey border-t-[1px] py-3 text-lg border-myGrey hover:text-white hover:border-t-white cursor-pointer">
          Products
        </h1>
        <h1 className="w-9/12 flex justify-start mx-auto font-necto text-myGrey border-t-[1px] py-3 text-lg border-myGrey hover:text-white hover:border-t-white cursor-pointer">
          Edition
        </h1>
        <h1 className="w-9/12 flex justify-start mx-auto font-necto text-myGrey border-t-[1px] py-3 text-lg border-myGrey hover:text-white hover:border-t-white cursor-pointer">
          Studio
        </h1>
        <h1 className="w-9/12 flex justify-start mx-auto font-necto text-myGrey border-t-[1px] py-3 text-lg border-myGrey hover:text-white hover:border-t-white cursor-pointer">
          Retailers
        </h1>
        <h1 className="w-9/12 flex justify-start mx-auto font-necto text-myGrey border-t-[1px] py-3 text-lg border-myGrey hover:text-white hover:border-y-white cursor-pointer">
          Contact
        </h1>
      </nav>
    </motion.div>
  );
});

export default SecondModal;
