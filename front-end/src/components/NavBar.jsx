import React from "react";
import { Link } from "react-router-dom";

import DropDownUserMenu from "./DropDownUserMenu";
import LoginButtons from "./LoginButtons";

function NavBar() {
  return (
    <nav className="text-xl flex gap-4 justify-between px-1 py-2 bg-blue-200">
      <Link to={"/"}>
        <img
          src="/logos/sn-logo.png"
          alt="icono de la página"
          className="h-10 w-auto bg-white rounded-lg px-2"
        />
      </Link>
      {/* <DropDownUserMenu /> */}
      <LoginButtons />
    </nav>
  );
}

export default NavBar;
