import React from "react";
import { useUserContext } from "../../context/UserContext";
import changeDateFormat from "../../utils/changeDateFormat";
import { Link } from "react-router-dom";

/**
 * Componente que contiene la vista del perfil del usuario.
 */
function MainProfile() {
  const { user } = useUserContext();

  return (
    <section className="flex flex-col text-black font-semibold">
      <figure className="mt-8 mx-auto text-center">
        <img
          className="w-24 h-24 object-cover rounded-xl bg-blue-200 mx-auto"
          src={user.avatar || process.env.REACT_APP_DEFAULT_AVATAR_ROUTE}
          alt="Avatar del usuario"
        />
        <h2 className="text-xl font-semibold ">
          {user.first_name} {user.last_name}
        </h2>
        <button className="text-sm px-5 text-gray-200 hover:bg-blue-500 rounded-xl">
          <Link to={"/users/edit"}>Editar usuario</Link>
        </button>
      </figure>

      <div className="mt-4 ms-4">
        <p className="py-1">Email: {user.email}</p>
        <p className="py-1">
          Fecha de nacimiento: {changeDateFormat(user.birth_date)}
        </p>
        <p className="py-1">Dni: {user.dni.toLocaleString("es")}</p>
      </div>
    </section>
  );
}

export default MainProfile;
