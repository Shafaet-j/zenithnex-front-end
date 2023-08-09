import React from "react";

const Subscribe = () => {
  return (
    <section className="lg:py-20 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 mx-auto lg:px-12 py-12 relative bg-[#f9fafb] max-w-[76rem] rounded-md">
        <img
          className=" absolute top-0 right-0"
          src="https://www.luganodes.com/static/linepattern2.9cf52c74.svg"
          alt=""
        />
        <div className=" self-center text-left">
          <h2 className="text-3xl font-bold mb-5">
            Subscribe to get our latest updates!
          </h2>
          <p className=" text-xl text-gray-700 mb-5">
            New products & networks supported, staking research, blog updates,
            and exclusive offers directly in your inbox.
          </p>
        </div>
        <form className="lg:px-5 space-y-5 z-10">
          <div className="flex flex-col text-left mb-7">
            <label htmlFor="email">Your email</label>
            <input
              className="p-3 rounded-md border-primary border-2 mt-2"
              type="text"
              placeholder="Type your email"
            />
          </div>
          <div className="flex flex-col text-left">
            <label>Staker Type</label>
            <input
              className="p-3 rounded-md border-primary border-2 mt-2"
              type="text"
              placeholder="Type your staker"
            />
          </div>
          <p className=" text-left">
            By subscribing, I accept the privacy policy.
          </p>
          <button className="bg-primary w-full py-3 rounded-md text-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
