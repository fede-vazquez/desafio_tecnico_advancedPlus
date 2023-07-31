import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

/**
 * Componente encargado de los links del menú del usuario.
 */
function LinksList() {
  const { updateUser, updateToken } = useUserContext();

  function logeOut() {
    updateToken(false);
    updateUser(false);
  }
  return (
    <ul className={`bg-stone-200 rounded-b-lg transition-all `}>
      <li className="py-0.5 text-base px-2 hover:bg-stone-300">
        <Link to={"/users/profile"}>Ver perfil</Link>
      </li>
      <li
        className="py-0.5 text-base px-2 hover:bg-stone-300"
        onClick={() => {
          logeOut();
        }}
      >
        <Link to={"/users/login"}>Cerrar sesión</Link>
      </li>
    </ul>
  );
}

export default LinksList;
