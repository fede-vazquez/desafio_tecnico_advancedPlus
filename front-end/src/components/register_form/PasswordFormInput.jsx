import React, { useState } from "react";
import Icon from "../Icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

/**
 * Componente que devuelve un input de tipo contraseña.
 * @param {String} id Id y for del input y label.
 * @param {String} name Nombre del input.
 * @param {String} value Valor del input.
 * @param {String} placeholder Texto que va detrás del input.
 * @param {Function} handleChange Función que cambia el valor.
 * @param {Object} error Errores del input, si tiene error se mostrará debajo del mismo.
 * @returns Retorna un input con las configuraciones seleccionadas.
 */
function PasswordFormInput({
  id,
  name,
  value,
  placeholder,
  handleChange,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function switchShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="my-1.5">
      <label htmlFor={id} className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          className={`form-input ${error && "border-alert"}`}
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
      {error && <p className="alert-text">{error.msg}</p>}
    </div>
  );
}

export default PasswordFormInput;
