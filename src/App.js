import React from "react";
import Header from "./components/header";
import CreateTodo from "./components/create-todo";

import TodoList from "./components/todo-list";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CreateTodo />
      <TodoList />
    </React.Fragment>
  );
}

export default App;