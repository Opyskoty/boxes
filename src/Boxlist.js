import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";

function Boxlist() {

  const [list, setList] = useState([]);

  const addItem = item => {
    let newItem = { ...item, id: uuid() }
    setList(list => [...list, newItem]);
  }

  const removeItem = id => {
    setList(list => list.filter(b => b.id !== id));
  }

  return (
    <div className="Boxlist">
      <NewBoxForm addItem={addItem} />
      <ul>
        {list.map(b => <Box {...b} removeItem={removeItem} />)}
      </ul>
    </div>
  )
}

export default Boxlist;