import React from "react";
import { Link } from "react-router-dom";

import DropDownUserMenu from "./DropDownUserMenu";
import LoginButtons from "./LoginButtons";
import { useUserContext } from "../context/UserContext";

function NavBar() {
  const { user } = useUserContext();
  return (
    <nav className="text-xl w-full fixed flex gap-5 justify-between px-1 py-2 bg-blue-200">
      <Link to={"/"}>
        <img
          src="/logos/sn-logo.png"
          alt="icono de la página"
          className="h-10 w-auto bg-white rounded-lg px-2"
        />
      </Link>
      {user ? (
        <DropDownUserMenu userName={user.first_name + " " + user.last_name} />
      ) : (
        <LoginButtons />
      )}
    </nav>
  );
}

export default NavBar;
