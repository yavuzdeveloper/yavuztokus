import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { Logo } from "./ui/Logo";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const handleNavClick = nav => {
    setToggle(false);
    setActive(nav.title);

    if (nav.type === "anchor" && isHomePage) {
      const element = document.getElementById(nav.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Logo className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Yavuz Tokus&nbsp;
            <span className="sm:block hidden">
              | Frontend Developer | Full Stack Developer
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              {nav.type === "route" ? (
                <Link to={`/${nav.id}`} onClick={() => setActive(nav.title)}>
                  {nav.title}
                </Link>
              ) : (
                <a
                  href={isHomePage ? `#${nav.id}` : `/#${nav.id}`}
                  onClick={e => {
                    if (isHomePage) {
                      e.preventDefault();
                      const element = document.getElementById(nav.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                    setActive(nav.title);
                  }}
                >
                  {nav.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.type === "route" ? (
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                  ) : (
                    <a href={isHomePage ? `#${nav.id}` : `/#${nav.id}`}>
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
