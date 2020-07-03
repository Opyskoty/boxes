import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/v4";

function TodoList() {
  const [list, setList] = useState([]);

  const addItem = item => {
    let newItem = { ...item, id: uuid() };
    setList(list => [...list, newItem]);
  }

  const removeItem = id => {
    setList(list => list.filter(item => item.id !== id));
  }

  return (
    <div className="todoList">
      <NewTodoForm addItem={addItem} />
      <ul>
        {list.map(item => <li key={item.id}><Todo {...item} removeItem={removeItem} /></li>)}
      </ul>
    </div>
  )
}

export default TodoList;
