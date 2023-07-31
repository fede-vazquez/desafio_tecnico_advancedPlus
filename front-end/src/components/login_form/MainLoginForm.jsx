import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { validationsLoginForm } from "../../validations/validationsLogin";
import { useUserContext } from "../../context/UserContext";
import formFetch from "../../utils/formFetch";
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
  const { updateUser, updateToken } = useUserContext();
  const [loading, setLoading] = useState(false);

  const { form, errors, setErrors, handleChange, validateSubmit } = useForm(
    prevFormData,
    validationsLoginForm
  );

  // Función para validar y mandar el formulario.
  async function submitForm(event) {
    setLoading(true);
    const validate = await validateSubmit(event, form);

    if (!validate) {
      setLoading(false);
      return;
    }

    try {
      // Si no existen errores, intentamos iniciar al usuario.
      const fetchData = await formFetch(
        process.env.REACT_APP_SERVER_URL + "/users/login",
        configToSubmit(form)
      );

      setErrors({});
      updateUser(fetchData.result.data);
      updateToken(fetchData.result.token);
    } catch (error) {
      // Si existen errores en el fetch, los agregamos en los errores.
      setErrors((prevErrors) => {
        return { ...prevErrors, ...error };
      });
      updateUser(false);
      updateToken(false);
    }
    setLoading(false);
  }

  if (loading) return <p>Procesando datos...</p>;
  return (
    <section className="p-3">
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
