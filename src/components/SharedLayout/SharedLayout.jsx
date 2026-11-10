import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
// import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();
  return (
    !isRefreshing && (
      <div>
        <AppBar />
        <Outlet />
      </div>
    )
  );
};
