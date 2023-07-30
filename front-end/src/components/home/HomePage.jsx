import React from "react";
import { useUserContext } from "../../context/UserContext";
import UsersList from "./UsersList";

/**
 * Componente de la página principal.
 */
function HomePage() {
  const { user, token } = useUserContext();
  return (
    <section>
      {user.rol?.name === "admin" ? (
        <UsersList userToken={token} />
      ) : (
        <p>
          Bienvenido/a {user.first_name} {user.last_name}
        </p>
      )}
    </section>
  );
}

export default HomePage;
