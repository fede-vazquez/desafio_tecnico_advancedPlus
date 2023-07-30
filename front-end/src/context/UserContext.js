import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const UserContext = createContext();

/**
 * Componente que contiene el contexto de usuario.
 */
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  /**
   * Función para actualizar a un usuario.
   * @param {Object|Boolean} newUser Objeto que contiene al usuario.
   *
   * En caso de que se quiera eliminar al usuario, le pasamos "false".
   */
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
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
