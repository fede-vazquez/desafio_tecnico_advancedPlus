import React from "react";
import useForm from "../../hooks/useForm";
import FormInput from "./FormInput";
import PasswordFormInput from "./PasswordFormInput";

const prevFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

/**
 * Componente que contiene el formulario.
 * @returns Retorna el formulario.
 */
function MainRegisterForm() {
  const { form, handleChange } = useForm(prevFormValues);
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
        />
        <FormInput
          id={"formLastNameInput"}
          name={"lastName"}
          value={form.lastName}
          placeholder={"Apellido"}
          handleChange={handleChange}
          type={"text"}
        />
        <FormInput
          id={"formEmailInput"}
          name={"email"}
          value={form.email}
          placeholder={"Email"}
          handleChange={handleChange}
          type={"email"}
        />
        <PasswordFormInput
          id={"formPasswordInput"}
          name={"password"}
          value={form.password}
          placeholder={"Contraseña"}
          handleChange={handleChange}
          type={"password"}
        />
        <PasswordFormInput
          id={"formConfirmPasswordInput"}
          name={"confirmPassword"}
          value={form.confirmPassword}
          placeholder={"Confirmar contraseña"}
          handleChange={handleChange}
          type={"confirmPassword"}
        />
      </form>
    </section>
  );
}

export default MainRegisterForm;
