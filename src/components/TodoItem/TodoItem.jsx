import { useState } from 'react';
import classes from './style.module.css';
import { updateTodo } from '../../api/todoConfig';

export default function TodoItem({ todo, removeTodo, getTodo, isChecked }) {
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);

  // Todo 편집 작업을 처리하는 함수
  const editTodo = async () => {
    await updateTodo(todo.id, newTodo, todo.isCompleted);
    getTodo();
    setEdit(false);
  };

  return (
    <>
      {!edit ? (
        <div className={classes.todoInput}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => isChecked(todo)}
          />
          <span className={classes.todoText}>{todo.todo}</span>
          <button
            data-testid="modify-button"
            className={classes.todoButton}
            onClick={() => setEdit(true)}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            className={classes.todoButton}
            onClick={() => removeTodo(todo)}
          >
            삭제
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editTodo();
          }}
          className={classes.todoForm}
        >
          <input
            data-testid="modify-input"
            className={classes.updateInput}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            data-testid="submit-button"
            className={classes.todoButton}
            type="submit"
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            className={classes.todoButton}
            type="button"
            onClick={() => setEdit(false)}
          >
            취소
          </button>
        </form>
      )}
    </>
  );
}
