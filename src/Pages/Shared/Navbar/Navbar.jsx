import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { RiArrowDropDownLine, RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navlink = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/product",
      title: "Product",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/company",
      title: "Company",
    },
  ];
  return (
    <header className=" py-6 sticky top-0 bg-[#fffffff8] z-20">
      <nav className=" flex justify-between items-center container mx-auto lg:px-40 px-6">
        <div className=" flex justify-between items-center gap-12">
          <div className=" flex items-center gap-3 justify-center">
            <img className=" w-10" src={logo} alt="logo" />
            <a className=" text-2xl font-bold" href="">
              Zenithnex
            </a>
          </div>
          <div className=" hidden lg:block">
            <ul className=" flex gap-8">
              {navlink.map(({ path, title }) => (
                <li
                  className=" text-secondary hover:text-primary font-bold hover:bg-gray-100 px-5 py-2 rounded duration-300"
                  key={path}
                >
                  <NavLink className=" flex items-center" to={path}>
                    {title}
                    {title !== "Home" && (
                      <span>
                        <RiArrowDropDownLine size={25} />
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className=" bg-primary px-6 py-3 rounded-md text-white font-semibold hidden lg:block">
          Contact Us
        </button>
        <div className=" lg:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <GrClose size={25} /> : <RiMenu3Fill size={25} />}
        </div>
        <div
          className={` absolute duration-300 ease-out ${
            open ? " right-14 top-0" : "right-14 -top-[15rem]"
          }`}
        >
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
