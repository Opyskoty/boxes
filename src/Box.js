import React from "react";

function Box({ id, width, height, backgroundColor, removeItem }) {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
  }
  return (
    <li key={id}>
      <div style={styles} data-testid="box"></div>
      <button onClick={() => removeItem(id)}>X</button>
    </li>
  )
}

export default Box;