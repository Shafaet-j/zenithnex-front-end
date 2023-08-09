import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import bg from "../../../assets/pattern.png";

const IconBlock = ({ Icon }) => (
  <div className=" text-secondary">
    <Icon size={25} />
  </div>
);

const Acclamation = () => {
  const steps = [
    {
      Icon: FiArrowUpRight,
      title: "AAA-Rated",
      info: "We are one of the highest rated and verified providers on Staking Rewards.",
      url: "https://www.luganodes.com/static/stakingRewardsLogoBlack.f16ea642.svg",
    },
    {
      Icon: FiArrowUpRight,
      title: "Super Representative",
      info: "One of the leading validators with Super Representative badge",
      url: "https://www.luganodes.com/static/tronLogo.2b576b40.svg",
    },
    {
      Icon: FiArrowUpRight,
      title: "Largest Validator",
      info: "We are one of the largest validators on Polygon, scaling it to the masses.",
      url: "https://www.luganodes.com/static/stakingRewardsLogoBlack.f16ea642.svg",
    },
    {
      Icon: FiArrowUpRight,
      title: "Trusted Validator",
      info: "We are one of the highest rated and verified providers on Staking Rewards.",
      url: "https://www.luganodes.com/static/bitfinexLogo.191bc761.svg",
    },
  ];

  return (
    <section className="lg:py-20 py-10 px-6">
      <p className="text-secondary font-bold mb-5">Acclamations</p>
      <h1 className="lg:text-4xl text-3xl font-bold mb-6">
        Trusted by the industry
      </h1>
      <p className=" mb-5">Massive achievements since Luganodes was born</p>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2)),url(${bg})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-8 container mx-auto lg:px-40 lg:py-24"
      >
        {steps.map(({ Icon, title, info, url }, index) => (
          <div className=" p-8 bg-[#f9fafb] rounded-lg" key={index}>
            <img className=" h-8 mb-20" src={url} alt="" />
            <div className=" text-left space-y-5">
              <h1 className="text-xl font-semibold mb-5">{title}</h1>
              <p className="">{info}</p>
              <div className=" flex items-center gap-3 cursor-pointer">
                <span className=" text-secondary font-bold text-xl">view</span>{" "}
                <IconBlock Icon={Icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Acclamation;
