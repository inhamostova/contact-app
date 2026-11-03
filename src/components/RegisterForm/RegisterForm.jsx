import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const data = { name, email, password };
    dispatch(register(data));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Sign up</button>
    </form>
  );
};
