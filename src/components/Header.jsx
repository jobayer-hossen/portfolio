import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, ScrollLink } from "react-scroll";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
    <Fade top>
    <div className="w-full max-w-7xl">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-green-400 hover:text-white">Jobayer Hossen</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-green-400 duration-500"
              >
                <button>{link.name}</button>
                
              </Link>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
    </Fade>
    </>
  );
};

export default Header;
