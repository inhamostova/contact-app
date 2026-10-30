import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SharedLayout = () => {
  const { name } = useSelector(state => state.auth.user);
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
        {isLoggedIn && <UserMenu name={name} />}
      </header>
      <Outlet />
    </div>
  );
};
