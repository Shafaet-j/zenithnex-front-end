import React from "react";

const ProcessCom = ({ title, info, ind }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-left mb-5">
        {ind}. {title}
      </h1>
      <p className=" text-left">{info}</p>
    </div>
  );
};

export default ProcessCom;
