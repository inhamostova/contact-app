import { useDispatch } from 'react-redux';
import { logout } from '../../redux/operations';

export const UserMenu = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
