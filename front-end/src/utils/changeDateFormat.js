/**
 *
 * @param {String} date Fecha en formato "YYYY-MM-DD"
 * @returns Retorna fecha en formato "DD/MM/YYYY"
 */
module.exports = (date) => {
  const partOfDate = date.split("-");
  const newDateFormat = `${partOfDate[2]}/${partOfDate[1]}/${partOfDate[0]}`;
  return newDateFormat;
};
