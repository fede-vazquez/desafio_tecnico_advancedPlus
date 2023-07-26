/**
 * Función para validar los inputs del formulario, devuelve un array de errores modificado.
 * @param {String} nameInput Nombre del input que se quiere validar.
 * @param {String|Number} valueInput Valor del input que se quiere validar.
 * @param {Array<Object>} validations Array con las validaciones.
 * @param {Array<Object>} errors Array de errores que estamos utilizando.
 * @returns Retorna el nuevo array de errores.
 */
export const validationsFormInputs = (
  nameInput,
  valueInput,
  validations,
  errors
) => {
  const validationSelected = validations.find(
    (validation) => validation.name === nameInput
  );

  if (validationSelected) {
    if (!validationSelected.validation(valueInput)) {
      console.log(errors);
      errors[nameInput] = { msg: validationSelected.msg };
    } else {
      delete errors[nameInput];
    }
  }

  return errors;
};
