import React from "react";
import useForm from "../../hooks/useForm";
import FormInput from "./FormInput";
import PasswordFormInput from "./PasswordFormInput";
import DateFormInput from "./DateFormInput";
import DniFormInput from "./DniFormInput";
import { validationsForm } from "../../validations/validationsForm";

const prevFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  dni: "",
  birthDate: "",
  password: "",
  confirmPassword: "",
};

/**
 * Componente que contiene el formulario.
 * @returns Retorna el formulario.
 */
function MainRegisterForm() {
  const { form, handleChange, errors, handleSubmitForm } = useForm(
    prevFormValues,
    validationsForm
  );

  return (
    <section className=" bg-blue-500 p-3">
      <form>
        <FormInput
          id={"formFirstNameInput"}
          name={"firstName"}
          value={form.firstName}
          placeholder={"Nombre"}
          handleChange={handleChange}
          type={"text"}
          error={errors.firstName}
        />
        <FormInput
          id={"formLastNameInput"}
          name={"lastName"}
          value={form.lastName}
          placeholder={"Apellido"}
          handleChange={handleChange}
          type={"text"}
          error={errors.lastName}
        />
        <FormInput
          id={"formEmailInput"}
          name={"email"}
          value={form.email}
          placeholder={"Email"}
          handleChange={handleChange}
          type={"email"}
          error={errors.email}
        />
        <PasswordFormInput
          id={"formPasswordInput"}
          name={"password"}
          value={form.password}
          placeholder={"Contraseña"}
          handleChange={handleChange}
          error={errors.password}
        />
        <PasswordFormInput
          id={"formConfirmPasswordInput"}
          name={"confirmPassword"}
          value={form.confirmPassword}
          placeholder={"Confirmar contraseña"}
          handleChange={handleChange}
          error={errors.confirmPassword}
        />
        <DniFormInput
          id={"formDniInput"}
          name={"dni"}
          value={form.dni}
          handleChange={handleChange}
          error={errors.dni}
        />
        <DateFormInput
          id={"formBirthDateInput"}
          name={"birthDate"}
          value={form.birthDate}
          handleChange={handleChange}
          error={errors.birthDate}
        />
      </form>
    </section>
  );
}

export default MainRegisterForm;
