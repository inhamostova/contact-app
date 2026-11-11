import { Outlet } from 'react-router-dom';
import { Bar } from 'components/Bar/Bar';
// import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import Container from '@mui/material/Container';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();
  return (
    !isRefreshing && (
      <div>
        <Bar />
        <Container fixed>
          <Outlet />
        </Container>
      </div>
    )
  );
};
