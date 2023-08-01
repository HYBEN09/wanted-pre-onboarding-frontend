import classes from './Button.module.css';

function Button({ type, children, onClick, testId }) {
  return (
    <button
      type={type}
      onClick={onClick}
      data-testid={testId}
      className={classes.btn}
    >
      {children}
    </button>
  );
}

export default Button;
