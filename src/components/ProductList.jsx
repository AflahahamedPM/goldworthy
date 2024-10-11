import { useModalContext } from "@/context/ModalContext";
import React from "react";
import { memo } from "react";

const ProductList = memo(() => {
    const {firstModalWidth} = useModalContext()
  const products = [
    "All products",
    "Stools",
    "Chairs",
    "Tables",
    "Low Tables",
    "Storage",
    "Commisions",
  ];
  return (
    <>
      {products.map((item, i) => (
        <h1
          key={i}
          className={` border-t-[1px] border-myGrey flex justify-start text-lg text-myGrey p-3 ${
            firstModalWidth === 36
              ? "w-[10/12] ml-[100px] mr-10"
              : "w-[7/12] ml-[480px] mr-14"
          } mx-auto hover:text-white hover:border-t-white cursor-pointer`}
        >
          {item}
        </h1>
      ))}
    </>
  );
});

export default ProductList;
