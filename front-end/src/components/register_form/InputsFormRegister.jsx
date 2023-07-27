import React from "react";
import FormInput from "./FormInput";
import PasswordFormInput from "./PasswordFormInput";
import DateFormInput from "./DateFormInput";
import DniFormInput from "./DniFormInput";
import ImageInput from "./ImageFormInput";

/**
 * Componente que contiene todos los inputs del formulario de registro.
 */
function InputsFormRegister({ form, handleChange, errors }) {
  return (
    <>
      <ImageInput
        id={"formAvatarInput"}
        name={"avatar"}
        value={form.avatar}
        handleChange={handleChange}
      />
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
    </>
  );
}

export default InputsFormRegister;
