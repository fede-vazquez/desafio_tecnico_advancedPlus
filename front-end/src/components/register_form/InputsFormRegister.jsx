import React from "react";
import FormInput from "../form_inputs/FormInput";
import PasswordFormInput from "../form_inputs/PasswordFormInput";
import DateFormInput from "../form_inputs/DateFormInput";
import DniFormInput from "../form_inputs/DniFormInput";
import ImageInput from "../form_inputs/ImageFormInput";

/**
 * Componente que contiene todos los inputs del formulario de registro.
 */
function InputsFormRegister({ form, handleChange, errors }) {
  return (
    <>
      <ImageInput
        id={"avatarRegisterForm"}
        name={"avatar"}
        value={form.avatar}
        handleChange={handleChange}
      />
      <FormInput
        id={"FirstNameRegisterForm"}
        name={"firstName"}
        value={form.firstName}
        placeholder={"Nombre"}
        handleChange={handleChange}
        type={"text"}
        error={errors.firstName}
      />
      <FormInput
        id={"LastNameRegisterForm"}
        name={"lastName"}
        value={form.lastName}
        placeholder={"Apellido"}
        handleChange={handleChange}
        type={"text"}
        error={errors.lastName}
      />
      <FormInput
        id={"EmailRegisterForm"}
        name={"email"}
        value={form.email}
        placeholder={"Email"}
        handleChange={handleChange}
        type={"email"}
        error={errors.email}
      />
      <PasswordFormInput
        id={"PasswordRegisterForm"}
        name={"password"}
        value={form.password}
        placeholder={"Contraseña"}
        handleChange={handleChange}
        error={errors.password}
      />
      <PasswordFormInput
        id={"ConfirmPasswordRegisterForm"}
        name={"confirmPassword"}
        value={form.confirmPassword}
        placeholder={"Confirmar contraseña"}
        handleChange={handleChange}
        error={errors.confirmPassword}
      />
      <DniFormInput
        id={"DniInput"}
        name={"dni"}
        value={form.dni}
        handleChange={handleChange}
        error={errors.dni}
      />
      <DateFormInput
        id={"BirthDateRegisterForm"}
        name={"birthDate"}
        value={form.birthDate}
        handleChange={handleChange}
        error={errors.birthDate}
      />
    </>
  );
}

export default InputsFormRegister;
