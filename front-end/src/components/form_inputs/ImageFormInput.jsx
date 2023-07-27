import React, { useState } from "react";

/**
 * Componente que devuelve un input de tipo imagen, el cual carga la imagen cuando el usuario la agrega.
 * @param {String} id Id y for del input y label.
 * @param {String} name Nombre del input.
 * @param {String} value Valor del input.
 * @param {String} value Valor del input.
 * @param {Function} handleChange Función que cambia el valor.
 * @returns Retorna un input con las configuraciones seleccionadas.
 */
function AvatarInput({ id, name, value, handleChange, error }) {
  const [avatar, setAvatar] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="text-center">
      <label
        htmlFor={id}
        className="inline-block cursor-pointer text-white hover:text-gray-300"
      >
        <div className="w-32 h-32 rounded-xl border-2 border-gray-300 mx-auto bg-slate-200 flex items-center justify-center cursor-pointer">
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full rounded-xl"
            />
          ) : (
            <img
              src={process.env.REACT_APP_DEFAULT_AVATAR_ROUTE}
              alt="Avatar"
              className="w-full h-full rounded-xl"
            />
          )}
        </div>
        <span>{avatar ? "Cambiar imagen" : "Agregar imagen"}</span>
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept="image/*"
        onChange={(e) => {
          handleImageChange(e);
        }}
        className="hidden"
      />
    </div>
  );
}

export default AvatarInput;
