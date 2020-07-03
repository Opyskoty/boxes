import React from "react";
import Boxlist from "./Boxlist";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <h1>Color Box Maker</h1>
      <Boxlist />
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;