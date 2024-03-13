import React, { useState } from "react";
import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";

function CreateTodo() {
  const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

  const [todo, setTodo] = useState("");

  const saveTodos = async () => {
    // post  todos to todo-api
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: todo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data)
    // Wipe the input box
    setTodo("");
  };

  return (
    <section className={styles.CreateTodoSection}>
      <input
        value={todo} // clears after typing
        // onkey down enables enter to create todos
        onKeyDown={(event) => event.key == "Enter" && saveTodos()}
        onChange={(event) => setTodo(event.target.value)}
        className={styles.createTodoInput}
        placeholder="start typing..."
      />
      <button
        onClick={() => saveTodos()}
        className={"btn btn-primary ${styles.btn}"}
      >
        create
      </button>
    </section>
  );
}

export default CreateTodo;
