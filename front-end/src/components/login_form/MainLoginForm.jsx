import React from "react";
import FormInput from "../form_inputs/FormInput";
import useForm from "../../hooks/useForm";
import ButtonPrimary from "../ButtonPrimary";
import PasswordFormInput from "../form_inputs/PasswordFormInput";
import { validationsLoginForm } from "../../validations/validationsLogin";
import { useUserContext } from "../../context/UserContext";
import getFetch from "../../utils/getFetch";

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
  const { updateUser } = useUserContext();

  const { form, errors, handleChange, handleSubmitForm, loading } = useForm(
    prevFormData,
    validationsLoginForm
  );

  async function submitForm(event) {
    await handleSubmitForm(
      event,
      form,
      process.env.REACT_APP_SERVER_URL + "/users/login",
      configToSubmit(form)
    );

    // Si no existen errores, buscamos y guardamos el usuario con el token.
    if (Object.keys(errors).length === 0) {
      const fetchData = await getFetch(
        process.env.REACT_APP_SERVER_URL + "/users/login",
        configToSubmit(form)
      );

      updateUser({ user: fetchData.data, token: fetchData.token });
    }
  }

  if (loading) return <p>Procesando datos...</p>;
  return (
    <section className="bg-blue-400 p-3">
      <form
        onSubmit={(event) => {
          submitForm(event);
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
