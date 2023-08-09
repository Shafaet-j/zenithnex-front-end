import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const navlink = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <div>
      {navlink.map(({ path, title }) => (
        <li
          className="text-secondary hover:text-primary font-bold hover:bg-gray-100 px-5 py-2 rounded duration-300 list-none"
          key={path}
        >
          <NavLink to={path}>{title}</NavLink>
        </li>
      ))}
    </div>
  );
};

export default MobileMenu;
