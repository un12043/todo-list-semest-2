function TodoItem({ todo, deleteTodo, toggleTodo }) {
    return (
      <li>
        {}
        <span
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          {todo.text}
        </span>
  
        <div>
          {}
          <button
            onClick={() => toggleTodo(todo.id)}
            className="done-btn"
          >
            {todo.done ? "Undo" : "Done"}
          </button>
  
          {}
          <button
            onClick={() => deleteTodo(todo.id)}
            className="delete-btn"
          >
            ❌
          </button>
        </div>
      </li>
    );
  }
  
  export default TodoItem;
  