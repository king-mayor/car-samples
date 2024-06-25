import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Darkmode from "./Darkmode";

const Navlinks = [
  {
    id: 1,
    link: "/#",
    name: "HOME",
  },
  {
    id: 2,
    link: "/#",
    name: "CARS",
  },
  {
    id: 3,
    link: "/#",
    name: "ABOUT",
  },
  {
    id: 4,
    link: "/#",
    name: "BOOKING",
  },
];
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="container relative text-black dark:text-white">
      <div className="flex justify-between md:px-12 py-6">
        <div>
          <h2 className="text-3xl text-black font-bold dark:text-white font-cursive">
            Car <span className="text-orange-400">Rental</span>
          </h2>
        </div>
        <div className="md:flex gap-5 hidden">
          {Navlinks.map((navs) => (
            <ul className="">
              <li key={navs.id} className="">
                <a
                  className="text-black font-semibold text-xl dark:text-white hover:border-b-2 hover:border-orange-300"
                  href={navs.link}
                >
                  {navs.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <Darkmode />
        </div>
        {/* {Mobile Links} */}
        {openMenu && (
          <div className="absolute text-center top-[100px] left-0 bg-gray-300 dark:bg-white p-4 w-[50%] z-20">
            {Navlinks.map((navs) => (
              <ul className="md:hidden">
                <li
                  key={navs.id}
                  className="leading-9 border-b-2 border-b-slate-400"
                >
                  <a
                    className="text-slate-500 font-semibold text-xl leading-9"
                    href={navs.link}
                  >
                    {navs.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        )}

        <div onClick={toggleMenu} className="md:hidden flex">
          {openMenu ? (
            <IoClose
              size={32}
              color="black"
              className="cursor-pointer dark:bg-white"
              onClick={toggleMenu}
            />
          ) : (
            <RiMenu3Fill
              size={32}
              color="black"
              className="cursor-pointer dark:bg-white"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
