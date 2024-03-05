import { useState, useEffect } from 'react';
import { getTodos } from './api';
import './App.css';
import Form from './Form';

function App() {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.log('Error while fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
  <div>
    <h1 className='text-blue-400 text-2xl font-black my-2 ml-2'>ToDo List</h1>
    <Form />
    <ul className=''>
      {todos.map((todo) => (
        <li key={todo.id} className='font-black'>{todo.title}</li>
      ))}
    </ul>
  </div>
  );
};

export default App;
