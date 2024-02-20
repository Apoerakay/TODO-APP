import React, { useState} from "react";
import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    const[todo, setTodo] = useState("");

   
    return(
        <section className={styles.CreateTodoSection}> 
        <input 
        onChange={event=>setTodo(event.target.value)}
         className={styles.createTodoInput}
        placeholder="start typing..."/>
        <button 
        onClick={()=>setTodos([...todos,todo])} 
        className={'btn btn-primary ${styles.btn}'}
        >create</button>
        </section>
    );
}

export default CreateTodo;