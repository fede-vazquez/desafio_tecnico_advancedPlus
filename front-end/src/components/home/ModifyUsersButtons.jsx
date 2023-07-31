import React from "react";
import Icon from "../Icon";
import {
  faPenToSquare,
  faUser,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const fetchConfig = (token) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

async function desactiveUser(userId, token, switchStatus) {
  try {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/admin/users/desactive/" + userId,
      fetchConfig(token)
    );

    if (response.status !== 200) {
      return false;
    }
    switchStatus((prevValue) => !prevValue);
    return true;
  } catch (error) {
    console.log(error);
  }
}
async function activeUser(userId, token, switchStatus) {
  try {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/admin/users/active/" + userId,
      fetchConfig(token)
    );

    if (response.status !== 200) {
      return false;
    }

    switchStatus((prevValue) => !prevValue);
    return true;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Componente que tiene las funcionalidades de editar o desactivar un usuario.
 * @param {Object} userToModify Datos del usuario que se va a modificar.
 */
function ModifyUsersButtons({ userToModify, setSwitchActiveUser }) {
  console.log(userToModify);
  const { token } = useUserContext();
  return (
    <div className={"flex flex-col w-16"}>
      <button className="p-1 my-0.5 rounded-md bg-blue-700 hover:bg-blue-800 shadow-md hover:shadow-lg">
        <Link to={"/users/edit/" + userToModify.id}>
          <Icon icon={faPenToSquare} css={"text-xl "} />
        </Link>
      </button>
      {userToModify.active ? (
        <button
          className="p-1 my-0.5 rounded-md bg-red-700 hover:bg-red-800 shadow-md hover:shadow-lg"
          onClick={() => {
            desactiveUser(userToModify.id, token, setSwitchActiveUser);
          }}
        >
          <Icon icon={faUserSlash} css={"text-xl "} />
        </button>
      ) : (
        <button
          className="p-1 my-0.5 rounded-md bg-green-700 hover:bg-green-800 shadow-md hover:shadow-lg"
          onClick={() => {
            activeUser(userToModify.id, token, setSwitchActiveUser);
          }}
        >
          <Icon icon={faUser} css={"text-xl "} />
        </button>
      )}
    </div>
  );
}

export default ModifyUsersButtons;
