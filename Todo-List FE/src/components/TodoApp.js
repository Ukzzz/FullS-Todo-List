import TodoItem from "./TodoItem";
import "./TodoApp.css";
export default function TodoApp({
  task,
  setTask,
  todos,
  addTodo,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <div className="todo-app-container">
      <h1>📝 To-Do List</h1>
      <input
        className="todo-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
        placeholder="Add a new task..."
      />
      <button className="todo-add-btn" onClick={addTodo}>
        Add
      </button>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
}
