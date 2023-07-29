/**
 * Middleware que valida si el usuario conectado es administrador.
 */
module.exports = (req, res, next) => {
  // Si el usuario dentro del token no es admin, devolvemos un error 403.
  if (req.token.rol !== "admin") {
    res.status(403).json({ msg: "Acceso denegado." });
  }
  next();
};
