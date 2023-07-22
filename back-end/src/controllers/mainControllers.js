const db = require("../../database/models");
const { v4: uuidV4 } = require("uuid");

module.exports = {
  /**
   * Controlador que devuelve todos los usuarios, paginados de 10 en 10, gracias a una query parameter.
   * @param {Number} req.query.p Número de página que se quiere ver.
   */
  getUsers: async (req, res) => {
    const pageLimit = 10;
    const pageNumber = req.query?.p > 0 ? req.query.p : 0;
    try {
      const users = await db.Users.findAll({
        limit: pageLimit,
        offset: pageNumber * pageLimit,
      });
      res.json({ status: 200, data: users });
    } catch (error) {
      console.log(error);
      res.json({ status: 503, msg: "Ocurrió un error con el servidor" });
    }
  },

  /**
   * Controlador que devuelve un usuario en base al id que viaja por el query parameter.
   * @param {String} req.params.id Id del usuario que viaja dentro del query parameter.
   */
  getOneUser: async (req, res) => {
    try {
      const user = await db.Users.findByPk(req.params.id, { include: ["rol"] });
      res.json({ status: 200, data: user });
    } catch (error) {
      console.log(error);
      res.json({ status: 503, msg: "Ocurrió un error con el servidor" });
    }
  },

  /**
   * Controlador que registra un usuario.
   *
   * Toma del body las propiedades: firstName, lastName, password, email y dni.
   *
   * Y toma del FTP el nombre del archivo guardado del avatar.
   */
  register: async (req, res) => {
    /**
     * Objeto que contiene los datos que se cargarán en la db.
     * @type {Object} newUser Datos del nuevo usuario.
     * @property {String} id Id del usuario, creado por uuidV4.
     * @property {String} first_name Nombre del usuario.
     * @property {String} last_name Apellido del usuario.
     * @property {String} email Email del usuario.
     * @property {String} password Contraseña del usuario, con hash.
     * @property {String} avatar Ruta al avatar del usuario.
     * @property {Number} dni dni del usuario.
     */
    const newUser = {
      id: uuidV4(),
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: "hash",
      avatar: "img",
      dni: Number(req.body.dni),
    };

    try {
      await db.Users.create(newUser);
      res.json({
        status: 200,
        msg: "Usuario creado correctamente.",
      });
    } catch (error) {
      console.log(error);
      res.json({ status: 503, msg: "Ocurrió un error con el servidor" });
    }
  },
};
