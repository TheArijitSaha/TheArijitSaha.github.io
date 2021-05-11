import React, { FC, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavLink from "./NavLink";

export type PageName = "Projects" | "Work";

type HeaderProps = {
  activePage?: PageName;
};

const Header: FC<HeaderProps> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary mb-3">
        <div className="w-full sm:w-10/12 container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-3xl font-teko leading-tight inline-block mr-4 py-1 whitespace-nowrap uppercase text-white"
            >
              Arijit Saha
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} title="pages" />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
          >
            <ul className="w-full lg:w-auto flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink to="/#Work" name="Work" />
              <NavLink to="/#Projects" name="Projects" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
