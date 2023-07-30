import React, { useState } from "react";
import useForm from "../../hooks/useForm";

import { validationsRegister } from "../../validations/validationsRegister";
import ButtonPrimary from "../ButtonPrimary";
import InputsFormRegister from "./InputsFormRegister";
import formFetch from "../../utils/formFetch";

const prevFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  dni: "",
  birthDate: "",
  password: "",
  confirmPassword: "",
};

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
 * Componente que contiene el formulario.
 * @returns Retorna el formulario.
 */
function MainRegisterForm() {
  const { form, handleChange, errors, setErrors, validateSubmit } = useForm(
    prevFormValues,
    validationsRegister
  );
  const [loading, setLoading] = useState(false);

  async function submitForm(event, form) {
    setLoading(true);
    const validate = validateSubmit(event, form);

    if (!validate) {
      setLoading(false);
      return;
    }

    try {
      // Si no existen errores, intentamos mandar el usuario.
      const fetchData = await formFetch(
        process.env.REACT_APP_SERVER_URL + "/users/register",
        configToSubmit(form)
      );

      if (fetchData.status === 201) {
        console.log("Usuario creado correctamente.");
      }
    } catch (error) {
      // Si existen errores en el fetch, los agregamos en los errores.
      setErrors((prevErrors) => {
        return { ...prevErrors, ...error };
      });
    }
    setLoading(false);
  }

  if (loading) return <p>Procesando datos...</p>;

  return (
    <section className="bg-blue-400 p-3">
      <form
        onSubmit={(event) => {
          submitForm(event, form);
        }}
      >
        <InputsFormRegister
          form={form}
          handleChange={handleChange}
          errors={errors}
        />

        <ButtonPrimary
          extraCss={"py-3 mt-4 block mx-auto px-5 shadow-md"}
          fontSize={"text-xl"}
        >
          Crear
        </ButtonPrimary>
      </form>
    </section>
  );
}

export default MainRegisterForm;
