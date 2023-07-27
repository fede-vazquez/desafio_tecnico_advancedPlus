import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

/**
 * Componente para los botones de creación e inicio de sesión.
 * @returns Botones para iniciar sesión y crear una cuenta
 */
function LoginButtons() {
  return (
    <div className="flex gap-3">
      <ButtonPrimary>
        <Link to={"/users/register"}>Crear cuenta</Link>
      </ButtonPrimary>
      <ButtonPrimary>
        <Link to={"/users/login"}>Iniciar sesión</Link>
      </ButtonPrimary>
    </div>
  );
}

export default LoginButtons;
