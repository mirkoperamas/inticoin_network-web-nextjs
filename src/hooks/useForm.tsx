import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm: any, validateForm: any, sendErrs: any) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(Object);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e: any) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (!sendErrs) {
      alert("Form was sent correctly");
      helpHttp()
        .post("https://formsubmit.co/ajax/mirkopb96@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "applitacion/json",
            Accept: "applitacion/json",
          },
        })
        .then((res) => {
          setForm(initialForm);
          setTimeout(() => 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
