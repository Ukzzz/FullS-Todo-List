import "./TodoItem.css";
export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id)}
      />
      <p className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.task}
      </p>

      <button className="todo-delete-btn" onClick={() => onDelete(todo._id)}>
        ❌
      </button>
    </div>
  );
}
