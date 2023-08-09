import React from "react";

const Question = () => {
  return (
    <section className="lg:py-20 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mx-auto lg:px-12 py-12 relative max-w-[76rem] rounded-md">
        <div className="text-left">
          <h2 className=" text-3xl font-bold mb-5">Have a question?</h2>
          <p className=" text-xl text-gray-700 mb-5">
            We work with clients all over the world
          </p>
          <button className=" bg-primary w-5/6 py-3 rounded-md text-white">
            Get in Touch
          </button>
        </div>
        <img
          src="https://www.luganodes.com/static/map-0b0ea213dcd83519526da654a81ec2db.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Question;
