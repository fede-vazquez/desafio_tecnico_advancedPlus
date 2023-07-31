import React from "react";
import Icon from "../Icon";
import { faPenToSquare, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
/**
 * Componente que tiene las funcionalidades de editar o desactivar un usuario.
 * @param {Object} userToModify Datos del usuario que se va a modificar.
 */
function ModifyUsersButtons({ userToModify }) {
  const { user, token } = useUserContext();
  return (
    <div className="flex flex-col w-16">
      <button className="p-1 my-0.5 rounded-md bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-lg">
        <Link to={"/users/edit/" + userToModify.id}>
          <Icon icon={faPenToSquare} css={"text-xl "} />
        </Link>
      </button>
      <button className="p-1 my-0.5 rounded-md bg-red-700 hover:bg-red-800 shadow-md hover:shadow-lg">
        <Link to={"/users/active/" + userToModify.id}>
          <Icon icon={faUserSlash} css={"text-xl "} />
        </Link>
      </button>
    </div>
  );
}

export default ModifyUsersButtons;
