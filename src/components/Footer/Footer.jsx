import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <footer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          color="primary"
          sx={{ top: 'auto', bottom: 0 }}
        >
          <Toolbar sx={{ margin: '0 auto' }}>
            <Typography variant="p" component="span" align="center">
              Stay organized. Stay connected.
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};
