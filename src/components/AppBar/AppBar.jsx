import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  // console.log(isLoggedIn);
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
