/**
 * Array con validaciones, para que sea más simple validar cada una.
 */
export const validationsLogin = [
  {
    name: "email",
    validation: (value) => {
      const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      return validEmail.test(value);
    },
    msg: "Email no valido",
  },
  {
    name: "password",
    validation: (value) => {
      return value.trim().length >= 8 && value.trim().length <= 24;
    },
    msg: "La contraseña debe que tener entre 8 y 24 caracteres.",
  },
];
