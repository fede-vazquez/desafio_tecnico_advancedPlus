import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import useForm from "../../hooks/useForm";
import { validationsEdit } from "../../validations/validationsEdit";
import EditContentForm from "./EditContentForm";
import formFetch from "../../utils/formFetch";

const configToSubmit = (data, userToken) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${userToken}`,
    },
    body: JSON.stringify(data),
  };
};

function EditFormUser() {
  const { user, token, updateUser, updateToken } = useUserContext();

  const [loading, setLoading] = useState(false);

  const { form, errors, setErrors, handleChange, validateSubmit } = useForm(
    user,
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
      const fetchData = await formFetch(
        process.env.REACT_APP_SERVER_URL + "/users/edit",
        configToSubmit(form, token)
      );
      console.log(fetchData);
      setErrors({});
      updateUser(fetchData.result.data);
      updateToken(fetchData.result.token);
    } catch (error) {
      // Si existen errores en el fetch, los agregamos en los errores.
      setErrors((prevErrors) => {
        return { ...prevErrors, ...error };
      });
    }

    setLoading(false);
  }

  if (loading) return <p>Cargando...</p>;
  return (
    <section className="pt-4 px-2">
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
    </section>
  );
}

export default EditFormUser;
