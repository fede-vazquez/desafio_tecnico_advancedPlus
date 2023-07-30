import React, { useEffect, useState } from "react";
import formFetch from "../../utils/formFetch";
import UserItem from "./UserItem";
import SearchButtons from "./SearchButtons";

const fetchConfig = (token) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

/**
 * Componente que contiene una lista de usuarios.
 * @param {String} userToken Token del usuario.
 * @returns Retorna una lista con los usuarios de la db si es que la validación esta correcta.
 */
function UsersList({ userToken }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [users, setUsers] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchUsers(urlToFetch, configToFetch) {
      const response = await formFetch(urlToFetch, configToFetch);

      console.log(response);
      if (response.status !== 200) {
        return false;
      }

      setUsers(response.result.data);
    }

    fetchUsers(
      process.env.REACT_APP_SERVER_URL + "/users?p=" + pageNumber,
      fetchConfig(userToken)
    );
    setLoading(false);
  }, [pageNumber, userToken]);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <section className="bg-blue-400 text-white">
      {users ? (
        <ul>
          {users.map((user) => {
            return <UserItem user={user} key={user.email} />;
          })}
        </ul>
      ) : (
        <p>Error de autorización.</p>
      )}
      {users && (
        <SearchButtons
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          usersLength={users.length}
        />
      )}
    </section>
  );
}

export default UsersList;
