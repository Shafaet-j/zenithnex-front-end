import React from "react";
import Info from "../../../Component/Info";

const Credential = () => {
  return (
    <section className=" py-20 px-6">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6">
        Luganodes by Credentials
      </h1>
      <p className=" mb-5">
        The world's fastest growing staking solution provider
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto lg:px-40 lg:py-24 justify-items-center gap-4">
        <Info title="$700M+" info="Worth Staked Assets" />
        <Info title="99.9%" info="Network Uptime" />
        <Info title="24+" info="Live Networks" />
        <Info title="AAA" info="on Staking Rewards" />
      </div>
    </section>
  );
};

export default Credential;
