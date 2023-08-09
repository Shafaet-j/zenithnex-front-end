import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <section>
      <div className=" bg-primary relative px-6">
        <footer className="grid grid-cols-1 lg:grid-cols-5 gap-8 container mx-auto lg:px-40 py-8">
          <div className=" text-left space-y-5">
            <div className=" flex items-center gap-3 text-left">
              <img className=" w-10" src={logo} alt="logo" />
              <a className=" text-xl font-bold text-white" href="">
                Zenithnex
              </a>
            </div>
            <h2 className=" font-bold text-white">
              Secure staking with leading blockchain infrastructure provider
            </h2>
            <div className=" flex justify-between gap-6 text-[#eb8586]">
              <p className="">
                Luganodes SA,
                <br />
                PM Consulenze
                <br />
                SAViale Stefano
                <br />
                Franscini 16 6900 <br /> Lugano
              </p>
              <p>
                Luganodes FZE,
                <br /> Saif Suite X3-46,
                <br /> SAIF Zone, Sharjah, UAE
              </p>
            </div>
            <img
              className=" mt-4"
              src="https://www.luganodes.com/static/stakingRewardsLogoWhite.6654ea2a.svg"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-4 text-white font-semibold text-left">
            <span className="text-[#eb8586]">Product</span>
            <a className=" hover:underline cursor-pointer">Staking</a>
            <a className=" hover:underline cursor-pointer">Staking api</a>
            <a className=" hover:underline cursor-pointer">Terminal</a>
          </div>
          <div className=" flex flex-col gap-4 text-white font-semibold text-left">
            <span className="text-[#eb8586]">Resource</span>
            <a className=" hover:underline cursor-pointer">Blog</a>
            <a className=" hover:underline cursor-pointer">Newsletter</a>
            <a className=" hover:underline cursor-pointer">Staking guide</a>
          </div>
          <div className=" flex flex-col gap-4 text-white font-semibold text-left">
            <span className="text-[#eb8586]">Company</span>
            <a className=" hover:underline cursor-pointer">About Us</a>
          </div>
          <div className=" flex flex-col gap-4 text-white font-semibold text-left">
            <span className="text-[#eb8586]">Social</span>
            <a className=" hover:underline cursor-pointer">Twitter</a>
            <a className=" hover:underline cursor-pointer">Facebook</a>
            <a className=" hover:underline cursor-pointer">Medium</a>
          </div>
        </footer>
      </div>
      <footer className=" bg-secondary p-8">
        <div className=" container mx-auto flex justify-between text-[#d75056]">
          <p>© 2023 Luganodes | All rights reserved</p>
          <p>Terms of use Privacy Policy</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
