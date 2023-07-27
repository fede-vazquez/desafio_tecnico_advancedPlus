import React from "react";
import FormInput from "../form_inputs/FormInput";
import useForm from "../../hooks/useForm";
import ButtonPrimary from "../ButtonPrimary";
import PasswordFormInput from "../form_inputs/PasswordFormInput";
import { validationsLogin } from "../../validations/validationsLogin";

const prevFormData = { email: "", password: "" };

const configToSubmit = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

/**
 * Componente de formulario de login.
 */
function MainLoginForm() {
  const { form, errors, handleChange, handleSubmitForm } = useForm(
    prevFormData,
    validationsLogin
  );

  return (
    <section className="bg-blue-400 p-3">
      <form
        onSubmit={(event) => {
          handleSubmitForm(
            event,
            form,
            process.env.REACT_APP_SERVER_URL + "/users/login",
            configToSubmit(form)
          );
        }}
      >
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
          error={errors.password}
        />

        <ButtonPrimary
          extraCss={"py-3 mt-4 block mx-auto px-5 shadow-md"}
          fontSize={"text-md"}
        >
          Iniciar sesión
        </ButtonPrimary>
      </form>
    </section>
  );
}

export default MainLoginForm;
