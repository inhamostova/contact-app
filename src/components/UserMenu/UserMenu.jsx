import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const { userName } = useAuth();

  const dispatch = useDispatch();
  return (
    <Grid container spacing={2}>
      <Typography variant="h6" component="span">
        {userName}
      </Typography>
      <Button
        style={{ backgroundColor: '#ffffff', color: 'rgb(25, 118, 210)' }}
        variant="outlined"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Grid>
  );
};
