import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.header}>
      <NavLink to="/" className={classes.link}>
        Home
      </NavLink>
      <NavLink to="/signin" className={classes.link}>
        SignIn
      </NavLink>
      <NavLink to="/signup" className={classes.link}>
        SignUp
      </NavLink>
      <NavLink to="/todo" className={classes.link}>
        Todo
      </NavLink>
    </div>
  );
}

export default Header;
