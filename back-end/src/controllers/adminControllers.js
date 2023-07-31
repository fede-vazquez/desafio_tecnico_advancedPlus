const db = require("../../database/models");
const { v4: uuidV4 } = require("uuid");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Objeto que contiene todos los controladores de administrador para las rutas.
 */
module.exports = {
  /**
   * Controlador que devuelve todos los usuarios, paginados de 10 en 10, gracias a una query parameter.
   * @param {Number} req.query.p Número de página que se quiere ver.
   */
  getUsers: async (req, res) => {
    const pageLimit = 10;
    const pageNumber = req.query?.p > 0 ? req.query.p : 1;
    try {
      const users = await db.Users.findAll({
        limit: pageLimit,
        offset: (pageNumber - 1) * pageLimit,
      });
      res.status(200).json({ data: users });
    } catch (error) {
      console.log(error);
      res.status(503).json({ msg: "Ocurrió un error con el servidor" });
    }
  },

  /**
   * Controlador que devuelve un usuario en base al id que viaja por el route parameter "id".
   * @param {String} req.params.id Id del usuario que viaja dentro del route parameter.
   */
  getOneUser: async (req, res) => {
    try {
      const user = await db.Users.findByPk(req.params.id, { include: ["rol"] });
      res.status(200).json({ data: user });
    } catch (error) {
      console.log(error);
      res.status(503).json({ msg: "Ocurrió un error con el servidor" });
    }
  },
  adminEditUser: async (req, res) => {
    const formUserData = {
      id: req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email.toLowerCase(),
      password: req.body.password,
      birth_date: req.body.birth_date,
      avatar: req.body.avatar,
      dni: req.body.dni,
    };
    try {
      const userToUpdate = await db.Users.findByPk(req.params.id, {
        include: ["rol"],
      });
      const newUserData = { ...userToUpdate.dataValues, ...formUserData };
      await db.Users.update(newUserData, {
        returning: true,
        where: { id: req.params.id },
      });
      // Código para que se cree y mande la JSON web token.
      jwt.sign(
        { user: { id: req.body.id, rol: req.body.rol.name } },
        process.env.SECRET,
        { algorithm: "HS256", expiresIn: "24h" },

        (error, token) => {
          res.status(200).json({ msg: "Usuario actualizado" });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(503).json({ msg: "Ocurrió un error en el servidor" });
    }
  },
};
