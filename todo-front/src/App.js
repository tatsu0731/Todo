import { useState, useEffect } from 'react';
import { getTodos } from './api';
import axios from 'axios'
import './App.css';
import Form from './Form';
import API_BASE_URL from './constants'

function App() {
  const [ todos, setTodos ] = useState([]);

  // タスクを取得して画面に表示するための記述
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

  // postするための記述
  const addTodoItem = (title) => {
    axios.post('http://localhost/api/tasks/index', { title, is_done: 0}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setTodos([...todos, response.data]);
      })
      .catch(error => console.error('Error adding todo', error));
    };

    const handleDelete = (id) => {
      axios.delete(`http://localhost/api/tasks/index/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => console.error('Error deleting todo', error));
    };

    const handleUpdate = (id) => {
      axios.patch(`http://localhost/api/tasks/index/${id}`, {
        is_done: 1
      },{
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, is_done:1} : todo));
        console.log('Todo marked as done', response.data);
      })
      .catch(error => console.error('Error marking todo as done', error));
    };

    // const handleStyles = todos.is_done !== 0 ? 'my-1 line-through' : 'my-1';

  return (
  <div>
    <h1 className='text-blue-400 text-2xl font-black my-2 ml-2'>ToDo List</h1>
    <Form addTodoItem={ addTodoItem }/>
    <ul className=''>
      {todos.map(todo => (
        <li
          key={todo.id} className={ todo.is_done !== 0 ? 'my-1 line-through' : 'my-1' }
          >
          {todo.title}
          <button
            onClick={() => handleUpdate(todo.id)}
            className="ml-2 font-black bg-yellow-400 py-1 px-4 text-white rounded-sm text-sm"
          >
            完了
          </button>
          <button
            onClick={() => handleDelete(todo.id)}
            className="ml-2 font-black bg-red-400 py-1 px-4 text-white rounded-sm text-sm"
          >
            削除
          </button>
        </li>
        )
      )}
    </ul>
  </div>
  );
};

export default App;
