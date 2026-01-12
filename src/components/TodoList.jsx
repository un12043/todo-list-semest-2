import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  if (todos.length === 0) {
    return <p>Ваш список задач пуст</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}/>))}
    </ul>
  );
}

export default TodoList;
