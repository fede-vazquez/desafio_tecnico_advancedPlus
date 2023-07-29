const { body } = require("express-validator");
const { Users } = require("../../database/models");
const bcrypt = require("bcryptjs");

/**
 * Array de validaciones para el login con express-validator.
 */
const validationsLoginForm = [
  body("email").custom(async (userEmail, { req }) => {
    const user = await Users.findOne({ where: { email: userEmail } });

    if (!user) {
      throw new Error("Email o contraseña incorrecta");
    }

    const password = req.body.password;
    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error("Email o contraseña incorrecta");
    }

    return true;
  }),
];

module.exports = validationsLoginForm;
