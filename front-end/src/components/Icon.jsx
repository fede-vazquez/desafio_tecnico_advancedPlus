import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Componente que devuelve un ícono de FontAwesomeIcon
 * @param {String} icon El ícono que se quiere mostrar. Importados desde "@fortawesome/free-solid-svg-icons".
 * @param {String} css Las clases css que se le quiere agregar al ícono.
 * @returns {JSX.Element} Retorna el ícono deseado.
 */
function Icon({ icon, css }) {
  return <FontAwesomeIcon icon={icon} className={css} />;
}

export default Icon;
