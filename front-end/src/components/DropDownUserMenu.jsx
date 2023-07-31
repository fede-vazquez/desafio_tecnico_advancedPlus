import React, { useState } from "react";
import Icon from "./Icon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LinksList from "./LinksList";

function DropDownUserMenu({ userName }) {
  const [active, setActive] = useState(false);

  function switchActive() {
    // Modifica el "active" a lo contrario del valor actual
    setActive(!active);
  }

  return (
    <div
      className="bg-white hover:bg-stone-200 rounded-xl cursor-pointer"
      onClick={() => {
        switchActive();
      }}
      onPointerLeave={() => {
        if (active) switchActive();
      }}
    >
      <figure className="flex items-center">
        <img
          src={process.env.REACT_APP_DEFAULT_AVATAR_ROUTE}
          alt="avatar de usuario"
          className=" h-10 rounded-full bg-stone-200 p-0.5 border-stone-400 border-2"
        />
        <p className="text-sm ps-1 pe-2">{userName}</p>
        <Icon icon={faChevronDown} css={"pe-2 h-4"} />
      </figure>
      {active && <LinksList />}
    </div>
  );
}

export default DropDownUserMenu;
