/**
 * Middleware que se encarga de verificar si existe un token o no.
 * El token debe venir en el header del request.
 */
module.exports = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  // Si no existe, devolvemos el error.
  if (typeof bearerHeader === "undefined") {
    res.status(403).json({ msg: "no existe un token" });
    return;
  }

  // Si existe, lo configuramos en el req.
  const token = bearerHeader.split(" ")[1];
  req.token = token;
  next();
};
