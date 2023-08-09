import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { AiOutlineStock, AiOutlineFieldTime } from "react-icons/ai";
import { FiShield } from "react-icons/fi";

const IconBlock = ({ Icon }) => (
  <div className="bg-[#fae0e0] inline-block p-2 rounded-full">
    <div className="bg-[#f3b4b4] p-2 rounded-full text-primary">
      <Icon size={25} />
    </div>
  </div>
);

const Feature = () => {
  const steps = [
    {
      Icon: BiLinkAlt,
      title: "Non-Custodial Staking",
      info: "Luganodes supports staking across 24+ protocols for enterprises and individuals.",
      url: "https://www.luganodes.com/static/ethereum%20full.55537e1a.svg",
    },
    {
      Icon: FiBook,
      title: "Geographically Distributed",
      info: "Follow our step-by-step staking guides.We make staking easy for you.",
    },
    {
      Icon: FiShield,
      title: "Highest Level Security",
      info: "Sit back, and have your staking assets compounded with Luganodes.",
    },
    {
      Icon: AiOutlineFieldTime,
      title: "High Uptime",
      info: "Sit back, and have your staking assets compounded with Luganodes.",
    },
    {
      Icon: AiOutlineStock,
      title: "Automatic Failover Practice",
      info: "Sit back, and have your staking assets compounded with Luganodes.",
    },
    {
      Icon: AiOutlineStock,
      title: "Dedicated SRE Experts",
      info: "Sit back, and have your staking assets compounded with Luganodes.",
    },
  ];

  return (
    <section className="py-20">
      <p className="text-secondary font-bold mb-5">Feature</p>
      <h1 className="lg:text-4xl text-3xl font-bold mb-6">
        AAA Rated Staking Solutions
      </h1>
      <p className=" mb-5">Unlock the power of staking with us</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto lg:px-40 lg:py-24">
        {steps.map(({ Icon, title, info, url }, index) => (
          <div className="space-y-5 px-4" key={index}>
            <IconBlock Icon={Icon} />
            <div>
              <h1 className="text-2xl font-semibold mb-5">{title}</h1>
              <p className="">{info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
