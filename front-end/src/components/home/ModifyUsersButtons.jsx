import React from "react";
import Icon from "../Icon";
import { faPenToSquare, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../context/UserContext";

function ModifyUsersButtons({ userToModify }) {
  const { user, token } = useUserContext();
  return (
    <div className="flex flex-col grow my-auto">
      <button className="p-1 my-0.5 rounded-md bg-blue-800">
        <Icon icon={faPenToSquare} css={"text-xl"} />
      </button>
      <button className="p-1 my-0.5 rounded-md bg-red-800">
        <Icon icon={faUserSlash} css={"text-xl"} />
      </button>
    </div>
  );
}

export default ModifyUsersButtons;
