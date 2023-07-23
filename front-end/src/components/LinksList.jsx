import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {Array<Object>} arrayLinks Array con objetos que contienen
 * los valores "link" con la ruta donde se quiera ir, y "text" con el texto que se quiere mostrar.
 * @returns
 */
function LinksList({ arrayLinks }) {
  return (
    <ul className={`bg-stone-200 rounded-b-lg transition-all `}>
      {arrayLinks &&
        arrayLinks.map((objLink) => {
          return (
            <li className="py-0.5 text-base px-2 hover:bg-stone-300">
              <Link to={objLink.link}>{objLink.text}</Link>
            </li>
          );
        })}
    </ul>
  );
}

export default LinksList;
