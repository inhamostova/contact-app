import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';

const Login = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  return !isLoggedIn && <LoginForm />;
};

export default Login;
