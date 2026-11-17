import { Outlet } from 'react-router-dom';
import { Bar } from 'components/Bar/Bar';
import { useAuth } from '../../hooks/useAuth';
import Container from '@mui/material/Container';
import { Footer } from 'components/Footer/Footer';
import { Box } from '@mui/material';

export const SharedLayout = () => {
  const { isRefreshing } = useAuth();
  return (
    !isRefreshing && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Займає всю висоту вікна
        }}
      >
        <Bar />
        <Container fixed sx={{ flexGrow: 1 }}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
      // <div>
      //   <Bar />
      //   <Container fixed>
      //     <Outlet />
      //   </Container>
      //   <Footer />
      // </div>
    )
  );
};
