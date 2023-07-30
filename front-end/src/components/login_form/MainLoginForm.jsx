import React from "react";
import useForm from "../../hooks/useForm";
import { validationsLoginForm } from "../../validations/validationsLogin";
import { useUserContext } from "../../context/UserContext";
import getFetch from "../../utils/getFetch";
import LoginFormContent from "./LoginFormContent";

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

  const { form, errors, setErrors, handleChange, validateSubmit } = useForm(
    prevFormData,
    validationsLoginForm
  );

  async function submitForm(event) {
    const validate = await validateSubmit(event, form);

    if (!validate) return;

    // Si no existen errores, intentamos iniciar al usuario.
    const fetchData = await getFetch(
      process.env.REACT_APP_SERVER_URL + "/users/login",
      configToSubmit(form)
    );
    // Si existen errores en el fetch, los agregamos en los errores.
    if (fetchData.errors) {
      setErrors((prevErrors) => {
        return { ...prevErrors, ...fetchData.errors };
      });
      updateUser(false);
      return;
    }

    setErrors({});
    updateUser(fetchData);
  }

  return (
    <section className="bg-blue-400 p-3">
      <form
        onSubmit={(event) => {
          submitForm(event);
        }}
      >
        <LoginFormContent
          form={form}
          handleChange={handleChange}
          errors={errors}
        />
      </form>
    </section>
  );
}

export default MainLoginForm;
