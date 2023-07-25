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
function DateFormInput({ id, name, value, placeholder, handleChange }) {
  return (
    <label htmlFor={id}>
      <span className="text-white relative top-2">Fecha de nacimiento</span>
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className="form-input pe-5"
        onChange={(e) => {
          handleChange(name, e.target.value);
        }}
      />
    </label>
  );
}

export default DateFormInput;
