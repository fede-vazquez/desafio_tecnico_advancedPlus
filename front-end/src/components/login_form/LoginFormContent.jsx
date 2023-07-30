import React from "react";
import FormInput from "../form_inputs/FormInput";
import ButtonPrimary from "../ButtonPrimary";
import PasswordFormInput from "../form_inputs/PasswordFormInput";

function LoginFormContent({ form, handleChange, errors }) {
  return (
    <>
      <FormInput
        id={"emailLoginForm"}
        name={"email"}
        value={form.email}
        placeholder={"Email"}
        handleChange={handleChange}
        type={"text"}
        error={errors.email}
      />

      <PasswordFormInput
        id={"passwordLoginForm"}
        name={"password"}
        value={form.password}
        placeholder={"Contraseña"}
        handleChange={handleChange}
        error={errors.password || errors.email}
      />

      <ButtonPrimary
        extraCss={"py-3 mt-4 block mx-auto px-5 shadow-md"}
        fontSize={"text-md"}
      >
        Iniciar sesión
      </ButtonPrimary>
    </>
  );
}

export default LoginFormContent;
