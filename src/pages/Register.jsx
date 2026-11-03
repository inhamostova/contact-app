import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';

const Register = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  return !isLoggedIn && <RegisterForm />;
};

export default Register;
