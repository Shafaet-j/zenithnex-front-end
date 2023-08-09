import React from "react";

const Info = ({ title, info }) => {
  return (
    <div className=" lg:text-left lg:border-l-primary lg:border-l-2 ps-6 hover:border-l-8 duration-300 border-b-primary border-b-2 w-full lg:border-b-0">
      <h1 className=" text-5xl font-semibold text-primary mb-5">{title}</h1>
      <p>{info}</p>
    </div>
  );
};

export default Info;
