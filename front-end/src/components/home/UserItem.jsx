import React from "react";
import ModifyUsersButtons from "./ModifyUsersButtons";

function UserItem({ user }) {
  return (
    <li className="flex justify-between align-middle w-full py-3.5 px-2 border-y-2 border-blue-200">
      <div className="flex gap-x-2 w-full">
        <img
          className="h-16 w-16 my-auto rounded-md bg-gray-50"
          src={user.avatar || process.env.REACT_APP_DEFAULT_AVATAR_ROUTE}
          alt={`avatar de ${user.first_name} ${user.last_name}`}
        />
        <div className="flex flex-col grow my-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {user.first_name} {user.last_name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-white">
            {user.email}
          </p>
        </div>
        <ModifyUsersButtons userToModify={user} />
      </div>
    </li>
  );
}

export default UserItem;
