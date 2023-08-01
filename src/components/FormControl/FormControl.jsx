import classes from './FormControl.module.css';


function FormControl({ label, type, value, onChange, id, required, errorMessage }) {
  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={classes.input}
      />
      {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

export default FormControl;
