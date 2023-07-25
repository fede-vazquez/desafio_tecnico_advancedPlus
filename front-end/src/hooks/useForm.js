import { useState } from "react";

/**
 * Hook personalizado para trabajar con el formulario.
 * @param {Object} formData Datos iniciales del formulario.
 */
function useForm(formData) {
  const [form, setForm] = useState(formData);

  /**
   * Función para controlar cuando se modifica un input.
   * @param {String} nameInput Nombre del atributo que estará dentro del form.
   * @param {String|Number} value Valor del input.
   */
  function handleChange(nameInput, value) {
    setForm((prevForm) => {
      return { ...prevForm, [nameInput]: value };
    });
  }

  return { form, handleChange };
}

export default useForm;
