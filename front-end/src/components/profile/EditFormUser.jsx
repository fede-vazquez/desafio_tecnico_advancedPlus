import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import useForm from "../../hooks/useForm";
import { validationsEdit } from "../../validations/validationsEdit";
import EditContentForm from "./EditContentForm";

function MainProfile() {
  const { user } = useUserContext();

  const [loading, setLoading] = useState(false);

  const { form, errors, setErrors, handleChange, validateSubmit } = useForm(
    user,
    validationsEdit
  );
  async function submitForm(event) {
    event.preventDefault();
    console.log(form);
  }

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

export default MainProfile;
