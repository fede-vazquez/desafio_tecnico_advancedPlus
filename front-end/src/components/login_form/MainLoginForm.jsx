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
  const { updateUser } = useUserContext();
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
      updateUser(fetchData);
    } catch (error) {
      // Si existen errores en el fetch, los agregamos en los errores.
      if (error?.formErrors) {
        setErrors((prevErrors) => {
          return { ...prevErrors, ...error.formErrors };
        });
      }
      updateUser(false);
    }
    setLoading(false);
  }

  if (loading) return <p>Procesando datos...</p>;
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
