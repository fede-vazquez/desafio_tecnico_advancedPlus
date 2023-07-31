import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import AdminEditForm from "./AdminEditForm";
import { useParams } from "react-router-dom";

const configToSubmit = (token) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  };
};

/**
 * Componente que contiene la lógica para cargar a un usuario específico y el formulario de edición del mismo.
 */
function AdminEditFormUser() {
  const [loading, setLoading] = useState(false);
  const { token } = useUserContext();
  const [userToEdit, setUserToEdit] = useState(false);

  const { id: userToEditId } = useParams();

  useEffect(() => {
    async function fetchUser(urlToFetch, sessionToken) {
      setLoading(true);
      try {
        const response = await fetch(urlToFetch, configToSubmit(sessionToken));

        if (response.status !== 200) {
          setLoading(false);
          setUserToEdit(false);
          return;
        }
        const user = await response.json();
        setUserToEdit(user.data);
      } catch (error) {
        console.log(error);

        setUserToEdit(false);
      }
      setLoading(false);
    }

    fetchUser(
      process.env.REACT_APP_SERVER_URL + "/admin/users/detail/" + userToEditId,
      token
    );
  }, [userToEditId, token]);

  if (loading) return <p>Cargando...</p>;
  return (
    <section className="pt-4 px-2">
      {userToEdit ? (
        <AdminEditForm userToEdit={userToEdit} token={token} />
      ) : (
        <p>Error de validación.</p>
      )}
    </section>
  );
}

export default AdminEditFormUser;
