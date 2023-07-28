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
        id={"firstNameRegisterForm"}
        name={"firstName"}
        value={form.firstName}
        placeholder={"Nombre"}
        handleChange={handleChange}
        type={"text"}
        error={errors.firstName}
      />
      <FormInput
        id={"lastNameRegisterForm"}
        name={"lastName"}
        value={form.lastName}
        placeholder={"Apellido"}
        handleChange={handleChange}
        type={"text"}
        error={errors.lastName}
      />
      <FormInput
        id={"emailRegisterForm"}
        name={"email"}
        value={form.email}
        placeholder={"Email"}
        handleChange={handleChange}
        type={"email"}
        error={errors.email}
      />
      <PasswordFormInput
        id={"passwordRegisterForm"}
        name={"password"}
        value={form.password}
        placeholder={"Contraseña"}
        handleChange={handleChange}
        error={errors.password}
      />
      <PasswordFormInput
        id={"confirmPasswordRegisterForm"}
        name={"confirmPassword"}
        value={form.confirmPassword}
        placeholder={"Confirmar contraseña"}
        handleChange={handleChange}
        error={errors.confirmPassword}
      />
      <DniFormInput
        id={"dniInput"}
        name={"dni"}
        value={form.dni}
        handleChange={handleChange}
        error={errors.dni}
      />
      <DateFormInput
        id={"birthDateRegisterForm"}
        name={"birthDate"}
        value={form.birthDate}
        handleChange={handleChange}
        error={errors.birthDate}
      />
    </>
  );
}

export default InputsFormRegister;
