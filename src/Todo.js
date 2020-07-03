import React from "react";

function Todo({ id, text, removeItem }) {
  console.log(id);
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => removeItem(id)}>X</button>
    </div>
  );
}

export default Todo;