import React from "react";

/**
 * Componente que devuelve un input de tipo texto.
 * @param {String} id Id y for del input y label.
 * @param {String} name Nombre del input.
 * @param {String} value Valor del input.
 * @param {String} value Valor del input.
 * @param {String} placeholder Texto que va detrás del input.
 * @param {Function} handleChange Función que cambia el valor.
 * @returns Retorna un input con las configuraciones seleccionadas.
 */
function DniFormInput({ id, name, value, placeholder, handleChange }) {
  return (
    <div>
      <span className="relative top-2 text-white">Sin separación</span>
      <label htmlFor={id} className="flex align-middle my-1.5">
        <div className="py-2 px-3 bg-blue-600 rounded-s-md">
          <span className="my-auto text-white">dni</span>
        </div>
        <input
          type="number"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          className="rounded-e-md py-2 ps-2 w-full"
          onChange={(e) => {
            handleChange(name, e.target.value);
          }}
        />
      </label>
    </div>
  );
}

export default DniFormInput;
