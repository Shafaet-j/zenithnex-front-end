import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import bg from "../../../assets/pattern.png";

const IconBlock = ({ Icon }) => (
  <div>
    <Icon size={25} />
  </div>
);

const Blogs = () => {
  const steps = [
    {
      Icon: FiArrowUpRight,
      title: "Announcement",
      title2: "Partnership with Supernets",
      info: "Key infrastructure provider and implementation partner for Polygon Supernets.",
      url: "https://www.luganodes.com/static/polygon-5fd3e9efbe52ec870ffe6e6bb5dbcd96.webp",
    },
    {
      Icon: FiArrowUpRight,
      title: "Guide",
      title2: "Super Representative",
      info: "One of the leading validators with Super Representative badge",
      url: "https://www.luganodes.com/static/aptos-6fb847f6cb3c41f24860de39e3137e3d.webp",
    },
    {
      Icon: FiArrowUpRight,
      title: "Research",
      title2: "Largest Validator",
      info: "We are one of the largest validators on Polygon, scaling it to the masses.",
      url: "https://www.luganodes.com/static/sui-4d23c7adb43a998f2d8aac360096a2ef.webp",
    },
  ];

  return (
    <section className="lg:py-20 py-10 px-6">
      <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center container mx-auto lg:px-40">
        <p className="text-secondary font-bold mb-5">Blogs</p>
        <button className=" bg-primary px-6 py-3 rounded-md text-white font-semibold mb-5">
          View all
        </button>
      </div>
      <div className="container mx-auto lg:px-40">
        <h1 className="lg:text-4xl text-3xl font-bold mb-6 lg:text-left">
          Recent Spotlights
        </h1>
        <p className=" text-left text-xl mb-5">
          Stay up to date with the latest stories of Luganodes
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 container mx-auto lg:px-40 lg:py-24 grid-cols-1">
        {steps.map(({ Icon, title, info, url, title2 }, index) => (
          <div className="" key={index}>
            <img className="mb-4 rounded-lg" src={url} alt="" />
            <div className=" text-left space-y-5">
              <p className=" text-secondary font-semibold">{title}</p>
              <div className=" flex justify-between items-center">
                <h1 className="text-xl font-semibold">{title2}</h1>
                <IconBlock Icon={Icon} />
              </div>
              <p className="">{info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
