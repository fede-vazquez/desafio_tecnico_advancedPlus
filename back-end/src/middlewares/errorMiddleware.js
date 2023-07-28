const { validationResult } = require("express-validator");
/**
 * Middleware que se encarga de devolver un status 422 si es que hay algún error en la confirmación del servidor, junto a los errores.
 */
module.exports = (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      status: 422,
      data: errors.mapped(),
      msg: "Hay un error con las validaciones de los datos enviados.",
    });
  }
  next();
};
