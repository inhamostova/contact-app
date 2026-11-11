import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <>
      <Button color="inherit">
        <NavLink
          style={{ color: 'inherit', textDecoration: 'none' }}
          to="/register"
        >
          Register
        </NavLink>
      </Button>
      <Button color="inherit">
        <NavLink
          style={{ color: 'inherit', textDecoration: 'none' }}
          to="/login"
        >
          Login
        </NavLink>
      </Button>
    </>
  );
};
