import React from "react";

const Card = ({ number, title, description, buttonText }) => {
  return (
    <div className="border-t-[1px] w-4/12 border-myGrey">
      <h1 className="text-9xl pt-8 pb-4 text-myGrey font-necto">{number}</h1>
      <h1 className="text-lg text-myGrey ml-3">{title}</h1>
      <h1 className="text-sm text-myGrey opacity-[0.7] ml-3 pt-2 pb-4">
        {description}
      </h1>
      <button className="underline-animation text-sm text-myGrey opacity-[0.7] ml-3 hover:opacity-[1] hover:text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
