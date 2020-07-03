import React, { useState } from "react";

const INITIAL_STATE = { text: "" }

function NewTodoForm({ addItem }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    // Why does next line need parans after arrow function?
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" name="text" value={formData.text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )

}

export default NewTodoForm;
