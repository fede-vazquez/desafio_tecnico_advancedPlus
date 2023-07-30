/**
 * Función que devuelve el estado y los datos de un fetch.
 * @param {String} url Url a la que se le quiere hacer una petición.
 * @param {Object} config Configuración de la petición.
 * @returns Retorna el estado y el valor de la petición.
 */
module.exports = async (url, config) => {
  const response = await fetch(url, config);
  const result = await response.json();

  // Si el estado es 422, hubo un error en las validaciones en el back-end, entonces devolvemos data.
  if (response.status === 422) {
    throw result.data;
  }

  return { status: response.status, result };
};
