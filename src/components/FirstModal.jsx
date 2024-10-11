import { motion } from "framer-motion";
import {memo} from "react";
import ProductList from "./ProductList";
import Retailers from "./Retailers";
import { useModalContext } from "@/context/ModalContext";

const FirstModal = memo(() => {

  const {changeFirstModalWidth, firstModalWidth, firstModalCursor, navbar } = useModalContext()
    return (
      <motion.div
        className="fixed inset-0 h-screen bg-lightGrey hover:transit"
        style={{ cursor: firstModalCursor }}
        initial={{ x: "-100%", width: "36%"}}
        animate={{ x: "0%", width: `${firstModalWidth}%` }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={firstModalWidth === 36 ? {x:"100px"} : {}}
        onClick={firstModalWidth === 36 ? () => changeFirstModalWidth() : undefined}

      >
        <h1 className="text-white font-necto h-[260px] flex justify-end font-medium text-6xl p-6">
          02
        </h1>

        {
          navbar === "Products" && <ProductList />
        }

        {
          navbar === "Retailers" && < Retailers />
        }

      </motion.div>
    );
  });

export default FirstModal;
