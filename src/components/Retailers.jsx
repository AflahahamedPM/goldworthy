import { useModalContext } from "@/context/ModalContext";
import { memo } from "react";

const Retailers = memo(() => {
    const {firstModalWidth} = useModalContext()
  const retailers = [
    "New Zeland",
    "Australia",
    "Italy"
  ];
  return (
    <div className="mt-20">
      {retailers.map((country, i) => (
        <h1
          key={i}
          className={` border-t-[1px] border-myGrey flex justify-start text-lg text-myGrey p-3 ${
            firstModalWidth === 36
              ? "w-[10/12] ml-[100px] mr-10"
              : "w-[7/12] ml-[500px] mr-14"
          } mx-auto hover:text-white hover:border-t-white cursor-pointer`}
        >
          {country}
        </h1>
      ))}
    </div>
  );
});

export default Retailers