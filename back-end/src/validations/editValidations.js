const { body } = require("express-validator");
const { Users } = require("../../database/models");
const { Op } = require("sequelize");
/**
 * Array de validaciones para el registro con express-validator.
 */
const validationsEditForm = [
  body("first_name")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener 3 o más letras."),

  body("last_name")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener 3 o más letras."),

  body("email")
    .isEmail()
    .withMessage("Debe agregar un email valido")
    .bail()
    .custom(async (userEmail, { req }) => {
      const emailExist = await Users.findOne({
        where: { email: userEmail, id: { [Op.not]: req.body.id } },
      });
      if (emailExist) {
        throw new Error("Este email ya existe");
      }
      return true;
    }),

  body("birth_date")
    .notEmpty()
    .withMessage("Debe agregar su fecha de nacimiento."),
];

module.exports = validationsEditForm;
