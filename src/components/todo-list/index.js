import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item";

function TodoList() {

    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);



    return (
        <ul className="list-group">
            {todos.map(function (todo, index) {

                return (
                    <li className="list-group-item" key={index} >
                        <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id={index} />
                        <label
                            className="form-check-label"
                            for={index}>
                            {todo}
                        </label>
                    </li>
                );
            })}



        </ul>
    );
}

export default TodoList;











