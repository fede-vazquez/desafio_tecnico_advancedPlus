/**
 * Array con validaciones, para que sea más simple validar cada una.
 */
export const validationsEdit = [
  {
    name: "first_name",
    validation: (value) => {
      return value.trim().length >= 3;
    },
    msg: "El nombre debe tener mínimo 3 letras.",
  },
  {
    name: "last_name",
    validation: (value) => {
      return value.trim().length >= 3;
    },

    msg: "El apellido debe tener mínimo 3 letras.",
  },
  {
    name: "email",
    validation: (value) => {
      const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      return validEmail.test(value);
    },
    msg: "Debe agregar un email valido",
  },
  {
    name: "birth_ate",
    validation: (value) => {
      return value;
    },
    msg: "Debe agregar una fecha de nacimiento.",
  },
];
