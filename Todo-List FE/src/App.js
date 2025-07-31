import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoApp from './components/TodoApp';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get('https://full-stack-todo-62go.onrender.com/api/todo');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!task.trim()) return;
    await axios.post('https://full-stack-todo-62go.onrender.com/api/todo', { task });
    setTask('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`https://full-stack-todo-62go.onrender.com/api/todo/${id}`);
    fetchTodos();
  };


  const toggleTodo = async (id) => {
    const todo = todos.find(t => t._id === id);
    await axios.put(`https://full-stack-todo-62go.onrender.com/api/todo/${id}`, { completed: !todo.completed });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoApp
      task={task}
      setTask={setTask}
      todos={todos}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  );
}

export default App;
