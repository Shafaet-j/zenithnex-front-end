import React from "react";
import laptop from "../../../assets/laptop.webp";
import { GiCheckMark } from "react-icons/gi";

const Infrastructure = () => {
  return (
    <section className=" px-6">
      <h1 className=" text-4xl font-bold">
        Secure, Robust, Always On Staking Infrastructure
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-20 container mx-auto lg:px-40 lg:py-24">
        <div>
          <img className=" lg:max-w-[590px]" src={laptop} alt="" />
        </div>
        <div className=" text-left space-y-5">
          <div className=" flex gap-5">
            <span>
              <GiCheckMark
                className=" bg-[#fae0e0] text-primary px-2 py-2 rounded-full"
                size={35}
              />
            </span>
            <div>
              <h2 className=" text-2xl font-semibold">Efficient staking</h2>
              <p className="">
                Our services are designed to ensure high efficiency in staking
                operations. You can react rapidly to the market.
              </p>
            </div>
          </div>
          <div className=" flex gap-5">
            <span>
              <GiCheckMark
                className=" bg-[#fae0e0] text-primary px-2 py-2 rounded-full"
                size={35}
              />
            </span>
            <div>
              <h2 className=" text-2xl font-semibold">
                Zero technical challenges
              </h2>
              <p className="">
                We take away the technical and operational challenges involved
                in running, managing, and maintaining nodes.
              </p>
            </div>
          </div>
          <div className=" flex gap-5">
            <span>
              <GiCheckMark
                className=" bg-[#fae0e0] text-primary px-2 py-2 rounded-full"
                size={35}
              />
            </span>
            <div>
              <h2 className=" text-2xl font-semibold">Efficient staking</h2>
              <p className="">
                Our services are designed to ensure high efficiency in staking
                operations. You can react rapidly to the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
