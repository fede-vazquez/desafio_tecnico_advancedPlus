import React from "react";
import FormInput from "../form_inputs/FormInput";
import DateFormInput from "../form_inputs/DateFormInput";
import DniFormInput from "../form_inputs/DniFormInput";
import ImageInput from "../form_inputs/ImageFormInput";
import ButtonPrimary from "../ButtonPrimary";

/**
 * Componente que contiene todos los inputs del formulario de registro.
 */
function InputsFormEdit({ form, handleChange, errors }) {
  return (
    <>
      <ImageInput
        id={"avatarEditForm"}
        name={"avatar"}
        value={form.avatar}
        handleChange={handleChange}
      />
      <FormInput
        id={"firstNameEditForm"}
        name={"first_name"}
        value={form.first_name}
        placeholder={"Nombre"}
        handleChange={handleChange}
        type={"text"}
        error={errors.first_name}
      />
      <FormInput
        id={"lastNameEditForm"}
        name={"last_name"}
        value={form.last_name}
        placeholder={"Apellido"}
        handleChange={handleChange}
        type={"text"}
        error={errors.last_name}
      />
      <FormInput
        id={"emailEditForm"}
        name={"email"}
        value={form.email}
        placeholder={"Email"}
        handleChange={handleChange}
        type={"email"}
        error={errors.email}
      />
      <DateFormInput
        id={"birthDateEditForm"}
        name={"birth_date"}
        value={form.birth_date}
        handleChange={handleChange}
        error={errors.birth_date}
      />
      <ButtonPrimary fontSize={"text-2xl"} extraCss={"mt-3"}>
        Editar
      </ButtonPrimary>
    </>
  );
}

export default InputsFormEdit;
