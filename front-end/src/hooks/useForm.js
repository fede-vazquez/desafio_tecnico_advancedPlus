import { useState } from "react";
import { validationsFormInputs } from "../validations/validation";

/**
 * Hook personalizado para trabajar con el formulario.
 * @param {Object} formData Datos iniciales del formulario.
 * @param {Array<Object>} validations Array con validaciones.
 * @returns {Object} Devuelve: los datos del formulario "form", los errores del formulario "errors", función para controlar los cambios "handleChange" y función para controlar el submit "handleSubmitForm".
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
    setErrors((prevError) => {
      return validationsFormInputs(nameInput, value, validations, prevError);
    });
  }

  function handleSubmitForm(e) {}

  return { form, errors, handleChange, handleSubmitForm };
}

export default useForm;
