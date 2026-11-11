import { Outlet } from 'react-router-dom';
import { Bar } from 'components/Bar/Bar';
// import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();
  return (
    !isRefreshing && (
      <div>
        <Bar />
        <Outlet />
      </div>
    )
  );
};
