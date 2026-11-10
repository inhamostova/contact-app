import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { userName } = useAuth();

  const dispatch = useDispatch();
  return (
    <div>
      <p>Hello, {userName}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
