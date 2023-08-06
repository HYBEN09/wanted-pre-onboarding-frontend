import {
  createTodo,
  deleteTodo,
  fetchTodo,
  updateTodo,
} from '../../api/todoConfig';
import classes from './Todo.module.css';
import { useCallback, useEffect, useState } from 'react';
import CreateTodo from '../../components/TodoItem/CreateTodo';
import TodoItem from '../../components/TodoItem/TodoItem';

const ToDo = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = async () => {
    await createTodo(todoInput);
    setTodoInput('');
    fetchTodoList();
  };

  const fetchTodoList = async () => {
    const response = await fetchTodo();
    setTodoList(response.data);
  };

  const removeTodo = useCallback(async (todo) => {
    await deleteTodo(todo.id);
    fetchTodoList();
  }, []);

  const handleCheckToggle = useCallback(async (todo) => {
    await updateTodo(todo.id, todo.todo, !todo.isCompleted);
    fetchTodoList();
  }, []);

  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className={classes.todoList}>
      <div className={classes.todoHeader}>TODO LIST</div>
      <CreateTodo
        onSubmit={addTodo}
        todo={todoInput}
        onChange={handleTodoInputChange}
      />
      <ul className={classes.ul}>
        {todoList.map((todo) => (
          <li key={todo.id} className={classes.list}>
            <TodoItem
              todo={todo}
              removeTodo={removeTodo}
              getTodo={fetchTodoList}
              isChecked={handleCheckToggle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
