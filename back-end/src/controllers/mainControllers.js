const db = require("../../database/models");
const { v4: uuidV4 } = require("uuid");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await db.Users.findAll();
      res.json({ status: 200, data: users });
    } catch (error) {
      console.log(error);
      res.json({ status: 404, msg: "Ocurrió un error con el servidor" });
    }
  },

  register: async (req, res) => {
    /**
     * Objeto que contiene los datos que se cargarán en la db.
     * @type {Object} newUser Datos del nuevo usuario.
     * @property {String} id Id del usuario, creado por uuidV4.
     * @property {String} firstName Nombre del usuario.
     * @property {String} lastName Apellido del usuario.
     * @property {String} password Contraseña del usuario, con hash.
     * @property {String} avatar Ruta al avatar del usuario.
     * @property {Number} dni dni del usuario.
     */
    const newUser = {
      id: uuidV4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: "hash",
      avatar: "img",
      dni: req.body.dni,
    };

    try {
      await db.Users.create(newUser);
      res.json({
        status: 200,
        msg: "Usuario creado correctamente.",
      });
    } catch (error) {
      console.log(error);
      res.json({ status: 404, msg: "Ocurrió un error con el servidor" });
    }
  },
};
