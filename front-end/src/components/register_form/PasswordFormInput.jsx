import React, { useState } from "react";
import Icon from "../Icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
function PasswordFormInput({ id, name, value, placeholder, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  function switchShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <label htmlFor={id} className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          className="form-input"
          placeholder={placeholder}
          onChange={(e) => {
            handleChange(name, e.target.value);
          }}
        />
        <div
          className="absolute end-2 top-0 px-2 cursor-pointer"
          onClick={() => {
            switchShowPassword();
          }}
        >
          <Icon icon={showPassword ? faEyeSlash : faEye} css={"text-2xl"} />
        </div>
      </label>
    </div>
  );
}

export default PasswordFormInput;
