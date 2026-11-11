import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        backgroundColor: 'aliceblue',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="h6" component={'p'}>
          Name: {name}
        </Typography>
        <Typography variant="h6" component={'p'}>
          Phone: {number}
        </Typography>
      </Box>
      <IconButton
        onClick={() => dispatch(deleteContact(id))}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
