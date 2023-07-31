import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { validationsEdit } from "../../validations/validationsEdit";
import EditContentForm from "./EditContentForm";
import formFetch from "../../utils/formFetch";

const configToSubmit = (data, adminToken) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${adminToken}`,
    },
    body: JSON.stringify(data),
  };
};

/**
 * Componente encargado de contener el formulario de edición del usuario seleccionado.
 * @param {Object} userToEdit Usuario que se quiere editar
 * @param {String} token Token del usuario conectado, usado para ver si es admin o no en el servidor.
 */
function AdminEditForm({ userToEdit, token }) {
  const [loading, setLoading] = useState(false);
  const { form, errors, setErrors, handleChange, validateSubmit } = useForm(
    userToEdit,
    validationsEdit
  );
  async function submitForm(event) {
    setLoading(true);
    const validate = validateSubmit(event, form);
    if (!validate) {
      setLoading(false);
      return;
    }

    try {
      // Si no existen errores, intentamos editar al usuario.
      await formFetch(
        process.env.REACT_APP_SERVER_URL + "/admin/users/edit/" + userToEdit.id,
        configToSubmit(form, token)
      );
      setErrors({});
    } catch (error) {
      console.log(error);
      // Si existen errores en el fetch, los agregamos en los errores.
      setErrors((prevErrors) => {
        return { ...prevErrors, ...error };
      });
    }
    setLoading(false);
  }

  if (loading) return <p>Editando usuario...</p>;
  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <EditContentForm
        form={form}
        handleChange={handleChange}
        errors={errors}
      />
    </form>
  );
}

export default AdminEditForm;
