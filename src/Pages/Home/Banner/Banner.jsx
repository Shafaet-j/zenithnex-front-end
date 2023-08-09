import React, { useState } from "react";
import globe from "../../../assets/globe.png";
import line from "../../../assets/line.png";

const Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className=" flex items-center justify-cente lg:h-[70vh] px-6 py-8">
      <div className=" lg:flex items-center container mx-auto lg:px-40">
        <div className=" text-left lg:w-3/5">
          <h2 className=" bg-[#fae0e0]  px-1 py-1 rounded-full text-secondary mb-5 text-xs lg:text-base leading-5 flex items-center max-w-[30rem] gap-2">
            <span className=" bg-primary px-3 py-1 rounded-full text-white font-medium text-xs">
              New
            </span>
            Monitor your staked assets on Luganodes Terminal
          </h2>
          <h1 className="text-4xl lg:text-6xl font-bold w-full mb-5">
            Institutional-Grade <br /> Blockchain Infrastructure
          </h1>
          <p className=" text-gray-700 mb-6 text-lg">
            We simplify the staking process for enterprises and individuals
          </p>
          <div className="flex gap-4 flex-col lg:flex-row">
            <button className=" bg-primary px-6 py-3 rounded-md text-white font-semibold">
              Get Started
            </button>
            <button className=" bg-white px-6 py-3 rounded-md text-gray-800 font-semibold border-2">
              Stake Now
            </button>
          </div>
        </div>
        <div className=" lg:w-2/5 relative">
          <img src={globe} alt="" />
        </div>
        <img
          className=" absolute left-[809px] w-[31rem] hidden lg:block"
          src={line}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
