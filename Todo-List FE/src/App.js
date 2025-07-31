import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoApp from './components/TodoApp';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/api/todo');
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!task.trim()) return;
    await axios.post('http://localhost:5000/api/todo', { task });
    setTask('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todo/${id}`);
    fetchTodos();
  };


  const toggleTodo = async (id) => {
    const todo = todos.find(t => t._id === id);
    await axios.put(`http://localhost:5000/api/todo/${id}`, { completed: !todo.completed });
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
