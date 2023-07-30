/**
 * Función que devuelve los datos de un fetch.
 * @param {String} url Url a la que se le quiere hacer una petición.
 * @param {Object} config Configuración de la petición.
 * @returns Retorna el valor de la petición.
 */
module.exports = async (url, config) => {
  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
