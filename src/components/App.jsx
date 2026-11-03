import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refresh } from '../redux/auth/operations';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  });
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
