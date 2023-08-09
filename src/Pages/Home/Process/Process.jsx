import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";

const IconBlock = ({ Icon }) => (
  <div className="bg-[#fae0e0] inline-block p-5 rounded-full">
    <div className="bg-[#f3b4b4] p-5 rounded-full text-primary">
      <Icon lg:size={70} size={30} />
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      Icon: BiLinkAlt,
      title: "1. Pick a supported blockchain",
      info: "Luganodes supports staking across 24+ protocols for enterprises and individuals.",
    },
    {
      Icon: FiBook,
      title: "2. Delegate using staking guides",
      info: "Follow our step-by-step staking guides.We make staking easy for you.",
    },
    {
      Icon: AiOutlineStock,
      title: "1. Pick a supported blockchain",
      info: "Sit back, and have your staking assets compounded with Luganodes.",
    },
  ];

  return (
    <section className="lg:py-20 px-6 bg-[#f9fafb] py-10">
      <p className="text-primary font-bold mb-5">Process</p>
      <h1 className="lg:text-4xl text-3xl font-bold mb-6 ">
        Staking with Luganodes is Easy
      </h1>
      <p className=" mb-5">Follow 3 steps to grow your portfolio</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto lg:px-40 lg:py-24">
        {steps.map(({ Icon, title, info }, index) => (
          <div className="space-y-5 px-4" key={index}>
            <IconBlock Icon={Icon} />
            <div>
              <h1 className="text-xl font-semibold text-left mb-5">{title}</h1>
              <p className=" text-left">{info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
