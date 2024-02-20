
function TodoItem({index, todo}) {
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
}
export default TodoItem;