const db = require("../../database/models");
const { v4: uuidV4 } = require("uuid");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Objeto que contiene todos los controladores para las rutas de usuario.
 */
module.exports = {
  /**
   * Controlador que registra un usuario.
   *
   * Toma del body las propiedades: firstName, lastName, password, birth_date, email y dni.
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
     * @property {String} birth_date Fecha de nacimiento del usuario.
     * @property {String} avatar Ruta al avatar del usuario.
     * @property {Number} dni dni del usuario.
     */
    const newUser = {
      id: uuidV4(),
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email.toLowerCase(),
      password: bcryptjs.hashSync(req.body.password, 8),
      birth_date: req.body.birthDate,
      avatar: "img",
      dni: Number(req.body.dni),
    };

    try {
      await db.Users.create(newUser);
      res.status(201).json({ msg: "Usuario creado correctamente." });
    } catch (error) {
      console.log(error);
      res.status(503).json({ msg: "Ocurrió un error con el servidor" });
    }
  },

  /**
   * Controlador para que un usuario inicie sesión.
   * @param {String} req.body.email Email del usuario que se va a buscar en la db.
   */
  login: async (req, res) => {
    try {
      const user = await db.Users.findOne({
        where: { email: req.body.email },
        include: ["rol"],
      });
      delete user.password;

      // Código para que se cree y mande la JSON web token.
      jwt.sign(
        { user: { id: user.id, rol: user.rol.name } },
        process.env.SECRET,
        { algorithm: "HS256", expiresIn: "24h" },

        (error, token) => {
          res.status(200).json({ data: user, token });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(503).json({ msg: "Ocurrió un error en el servidor" });
    }
  },
  /**
   * Controlador que edita y devuelve un usuario junto a un nuevo token.
   *
   * Toma del body las propiedades: first_name, last_name, birth_date y email.
   *
   * Y toma del FTP el nombre del archivo guardado del avatar.
   */
  editUser: async (req, res) => {
    const formUserData = {
      id: req.token.user.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email.toLowerCase(),
      password: req.body.password,
      birth_date: req.body.birth_date,
      avatar: req.body.avatar,
      dni: req.body.dni,
    };

    try {
      const userToUpdate = await db.Users.findByPk(req.token.user.id, {
        include: ["rol"],
      });

      const newUserData = { ...userToUpdate.dataValues, ...formUserData };

      await db.Users.update(newUserData, {
        returning: true,
        where: { id: req.token.user.id },
      });
      // Código para que se cree y mande la JSON web token.
      jwt.sign(
        { user: { id: req.body.id, rol: req.body.rol.name } },
        process.env.SECRET,
        { algorithm: "HS256", expiresIn: "24h" },

        (error, token) => {
          res.status(200).json({ data: newUserData, token });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(503).json({ msg: "Ocurrió un error en el servidor" });
    }
  },
};
