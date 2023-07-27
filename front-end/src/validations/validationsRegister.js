/**
 * Array con validaciones, para que sea más simple validar cada una.
 */
export const validationsRegister = [
  {
    name: "firstName",
    validation: (value) => {
      return value.trim().length >= 3;
    },
    msg: "El nombre debe tener mínimo 3 letras.",
  },
  {
    name: "lastName",
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
    name: "dni",
    validation: (value) => {
      const onlyNumbersDNI = value.toString().replace(/\D/g, "");
      const validDni = /^\d{7,8}(?:[-\s]\d{4})?$/;
      return validDni.test(onlyNumbersDNI);
    },
    msg: "Su dni debe contener 7 u 8 números.",
  },
  {
    name: "password",
    validation: (value) => {
      return value.trim().length >= 8 && value.trim().length <= 24;
    },
    msg: "La contraseña debe que tener entre 8 y 24 caracteres.",
  },
  {
    name: "confirmPassword",
    validation: (value) => {
      const password = document.getElementById("formPasswordInput");
      return value === password.value && value.trim().length > 0;
    },
    msg: "Las contraseñas no coinciden.",
  },
  {
    name: "birthDate",
    validation: (value) => {
      return value;
    },
    msg: "Debe agregar una fecha de nacimiento.",
  },
];
