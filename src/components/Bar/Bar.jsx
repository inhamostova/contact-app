import { NavLink } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const Bar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <NavLink
                style={{ color: 'inherit', textDecoration: 'none' }}
                to="/"
              >
                Home
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              )}
            </Grid>
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
