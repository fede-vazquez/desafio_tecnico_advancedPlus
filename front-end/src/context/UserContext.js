import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const UserContext = createContext();

/**
 * Componente que contiene el contexto de usuario y token.
 */
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState(false);

  /**
   * Función para actualizar a un usuario.
   * @param {Object|Boolean} newUser Objeto que contiene al usuario.
   *
   * En caso de que se quiera eliminar al usuario, le pasamos "false".
   */
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  /**
   * Función para actualizar a un token.
   * @param {String|boolean} newToken Objeto que contiene al usuario.
   *
   * En caso de que se quiera eliminar el token, le pasamos "false".
   */
  const updateToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, token, updateToken }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Hook personalizado que permite utilizar el contexto de React con más facilidad.
 * @returns Retorna los valores dentro del contexto.
 */
const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export { UserProvider, useUserContext };
