import React from "react";

/**
 * Componente que devuelve un input de tipo fecha.
 * @param {String} id Id y for del input y label.
 * @param {String} name Nombre del input.
 * @param {String} value Valor del input.
 * @param {String} placeholder Texto que va detrás del input.
 * @param {Function} handleChange Función que cambia el valor.
 * @param {Object} error Errores del input, si tiene error se mostrará debajo del mismo.
 * @returns Retorna un input con las configuraciones seleccionadas.
 */
function DateFormInput({ id, name, value, placeholder, handleChange, error }) {
  return (
    <div className="my-1.5">
      <label htmlFor={id}>
        <span className="text-white">Fecha de nacimiento</span>
        <input
          type="date"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`form-input pe-5 ${error && "border-alert"}`}
          onChange={(e) => {
            handleChange(name, e.target.value);
          }}
        />
      </label>
      {error && <p className="alert-text">{error.msg}</p>}
    </div>
  );
}

export default DateFormInput;
