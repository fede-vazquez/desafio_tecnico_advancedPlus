import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="text-xl flex gap-4 justify-between px-3 py-2">
      <Link to={"/"}>
        <img
          src="/sn-logo.png"
          alt="icono de la página"
          className="h-10 w-auto"
        />
      </Link>
      <ul className="flex gap-2 grow">
        <li>
          <Link to={"/profile"} className=" text-lg">
            Perfil
          </Link>
        </li>
      </ul>
      <figure className="flex items-center bg-stone-200 rounded-full cursor-pointer">
        <img
          src={
            process.env.REACT_APP_SERVER_URL +
            "/images/avatar/generic_avatar.png"
          }
          alt="avatar de usuario"
          className=" h-10 rounded-full bg-stone-200 p-0.5 border-stone-400 border-2"
        />
        <p className="text-sm ps-1 pe-2">Federico Vazquez</p>
        <Icon icon={faChevronDown} css={"pe-2 h-4"} />
      </figure>
    </nav>
  );
}

export default NavBar;
