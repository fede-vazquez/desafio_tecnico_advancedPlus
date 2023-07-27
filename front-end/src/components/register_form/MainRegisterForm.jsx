import React from "react";
import useForm from "../../hooks/useForm";

import { validationsRegister } from "../../validations/validationsRegister";
import ButtonPrimary from "../ButtonPrimary";
import InputsFormRegister from "./InputsFormRegister";

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
    cache: "no-cache",
    body: JSON.stringify(data),
  };
};

/**
 * Componente que contiene el formulario.
 * @returns Retorna el formulario.
 */
function MainRegisterForm() {
  const { form, handleChange, errors, handleSubmitForm } = useForm(
    prevFormValues,
    validationsRegister
  );

  return (
    <section className="bg-blue-400 p-3">
      <form
        onSubmit={(e) => {
          handleSubmitForm(
            e,
            form,
            process.env.REACT_APP_SERVER_URL + "/users/register",
            configToSubmit(form)
          );
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
