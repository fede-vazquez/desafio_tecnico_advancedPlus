import React from "react";

/**
 * Componente que devuelve un input de tipo texto.
 * @param {String} id Id y for del input y label.
 * @param {String} name Nombre del input.
 * @param {String} value Valor del input.
 * @param {String} value Valor del input.
 * @param {String} placeholder Texto que va detrás del input.
 * @param {Function} handleChange Función que cambia el valor.
 * @param {String} type Tipo de input, puede ser: text o email
 * @returns Retorna un input con las configuraciones seleccionadas.
 */
function FormInputText({ id, name, value, placeholder, handleChange, type }) {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className="rounded-md py-2 ps-2 w-full my-1.5"
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(name, e.target.value);
        }}
      />
    </label>
  );
}

export default FormInputText;
