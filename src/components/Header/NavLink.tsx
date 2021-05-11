import React, { FC } from "react";

import { Link } from "gatsby";

type NavLinkProps = {
  to: string;
  name: string;
};

const NavLink: FC<NavLinkProps> = ({ name, to, active }) => {
  return (
    <li className="nav-item">
      <Link
        to={to}
        className={
          `px-3 py-2 flex items-center text-base uppercase` +
          ` font-bold leading-snug text-white hover:opacity-75` +
          `text-gray-300`
        }
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
