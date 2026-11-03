import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const data = { email, password };
    dispatch(login(data));
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
