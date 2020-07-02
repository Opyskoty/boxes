import React, { useState } from "react";

const INITIAL_STATE = { width: 0, height: 0, backgroundColor: "" }

function NewBoxForm({ addItem }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input type="number" name="width" id="width" value={formData.width} onChange={handleChange} />
      <label htmlFor="height">Height</label>
      <input type="number" name="height" id="height" value={formData.height} onChange={handleChange} />
      <label htmlFor="backgroundColor">Background Color</label>
      <input type="text" name="backgroundColor" id="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />
      <button type="submit">Add a Box!</button>
    </form>
  )
}

export default NewBoxForm;