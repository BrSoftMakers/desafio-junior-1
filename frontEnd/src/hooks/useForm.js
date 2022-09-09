import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initialState);
  };

  return [form, handleChange, clear];
};

export default useForm;