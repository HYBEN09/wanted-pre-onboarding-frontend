import classes from './Button.module.css';

function Button({ type, children, onClick, testId, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      data-testid={testId}
      className={classes.btn}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
