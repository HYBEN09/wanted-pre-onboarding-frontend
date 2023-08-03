import classes from './style.module.css';

function CreateTodo({ onSubmit, todo, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formWrapper}>
      <input
        data-testid="new-todo-input"
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="할일을 입력하세요"
        className={classes.formInput}
      />
      <button
        data-testid="new-todo-add-button"
        type="submit"
        className={classes.formBtn}
      >
        추가
      </button>
    </form>
  );
}

export default CreateTodo;
