import React from "react";
import Counter from "./Counter";
import { CurvedSection } from "./lists";

const CurvedContainer = () => {

  return (
    <div className=" bg-[#481A54] pb-36 py-36">
      <h1 className="text-white font-bold text-5xl max-lg:text-4xl text-center mb-[100px]">We’re in the business of growing knowledge.</h1>
      <div className="flex max-lg:flex-col max-lg: justify-between gap-16 items-center px-16 max-lg:px-10">
        {CurvedSection.map((item) => (
          <Counter targetNumber={item.targetNumber} duration={item.duration} value={item.value} text={item.text} />
        ))}

      </div>
    </div>
  );
};

export default CurvedContainer;
