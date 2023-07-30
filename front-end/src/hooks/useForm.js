import { useState } from "react";
import { validationsFormInputs } from "../validations/validation";

/**
 * Hook personalizado para trabajar con el formulario.
 * @param {Object} formData Datos iniciales del formulario.
 * @param {Array<Object>} validations Array con validaciones.
 * @returns Devuelve: los datos del formulario "form", los errores del formulario "errors", función para controlar los cambios "handleChange" y función para controlar el submit "validateSubmit".
 */
function useForm(formData, validations) {
  const [form, setForm] = useState(formData);
  const [errors, setErrors] = useState([]);

  /**
   * Función para controlar cuando se modifica un input.
   * @param {String} nameInput Nombre del atributo que estará dentro del form.
   * @param {String|Number} value Valor del input.
   */
  function handleChange(nameInput, value) {
    setForm((prevForm) => {
      return { ...prevForm, [nameInput]: value };
    });
    setErrors((prevErrors) => {
      return validationsFormInputs(nameInput, value, validations, prevErrors);
    });
  }

  /**
   * Función que verifica cada una de las validaciones del front del formulario.
   * @param {Object} event Evento de submit del formulario.
   * @param {Object} form Formulario que se va a validar.
   * @returns Retorna true si se validan correctamente todos los campos del formulario.
   */
  function validateSubmit(event, form) {
    event.preventDefault();

    const nameInputsForm = Object.keys(form);

    let errors = {};

    nameInputsForm.forEach((nameInput) => {
      errors = validationsFormInputs(
        nameInput,
        form[nameInput],
        validations,
        errors
      );
    });

    if (Object.keys(errors).length > 0) {
      setErrors((prevErrors) => {
        return { ...prevErrors, ...errors };
      });
      return false;
    }
    return true;
  }

  return {
    form,
    errors,
    setErrors,
    handleChange,
    validateSubmit,
  };
}

export default useForm;
