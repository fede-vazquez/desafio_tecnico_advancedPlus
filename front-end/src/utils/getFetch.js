/**
 * Función que devuelve los datos de un fetch.
 * @param {String} url Url a la que se le quiere hacer una petición.
 * @param {Object} config Configuración de la petición.
 * @returns Retorna el valor de la petición.
 */
module.exports = async (url, config) => {
  const response = await fetch(url, config);
  const result = await response.json();

  if (response.status === 422) {
    return { errors: result.data };
  }

  return result;
};
