const { body } = require("express-validator");
const { Users } = require("../../database/models");
/**
 * Array de validaciones con express-validator.
 */
const validationsRegisterForm = [
  body("firstName")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener 3 o más letras."),

  body("lastName")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener 3 o más letras."),

  body("email")
    .isEmail()
    .withMessage("Debe agregar un email valido")
    .bail()
    .custom(async (userEmail) => {
      const emailExist = await Users.findOne({ where: { email: userEmail } });
      if (emailExist) {
        throw new Error("Este email ya existe");
      }
      return true;
    }),

  body("dni")
    .isLength({ min: 7, max: 8 })
    .withMessage("Su dni debe contener 7 u 8 números."),

  body("password")
    .isLength({ min: 8, max: 24 })
    .withMessage("La contraseña debe tener entre 8 y 24 caracteres."),

  body("confirmPassword").custom((confirmPassword, { req }) => {
    if (confirmPassword.length === 0 || confirmPassword !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
  body("birthDate")
    .notEmpty()
    .withMessage("Debe agregar su fecha de nacimiento."),
];

module.exports = validationsRegisterForm;
