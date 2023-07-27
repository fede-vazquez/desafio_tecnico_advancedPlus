import React from "react";

/**
 * Componente de botón con distintas configuraciones.
 * @param {ChildNode} children Contenido que tendrá el botón. Sea un Link o solo un texto
 * @param {Function} onClickEvent Función que se activa con un click. A la misma se le pasará el evento como propiedad.
 * @param {String} fontSize Clase que define el tamaño de letra del botón, por defecto "text-xs".
 * @param {String} extraCss String con un Css extra en caso de que sea necesario.
 * @returns Botón con las configuraciones dadas.
 */
function ButtonPrimary({ children, onClickEvent, fontSize, extraCss }) {
  return (
    <button
      className={`cursor-pointer rounded-xl px-3 text-white font-medium ${
        fontSize || "text-xs"
      } bg-blue-500 hover:bg-blue-600 ${extraCss || ""} `}
      onClick={(e) => {
        if (onClickEvent) onClickEvent(e);
      }}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
