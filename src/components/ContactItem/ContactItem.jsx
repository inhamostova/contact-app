import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../redux/contacts/operations';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { ContactForm } from 'components/ContactForm/ContactForm';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 1,
};

export const ContactItem = ({ contact }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          Name: {contact.name}
        </Typography>
        <Typography variant="h6" component={'p'}>
          Phone: {contact.number}
        </Typography>
      </Box>
      <Box>
        <IconButton
          onClick={() => dispatch(deleteContact(contact.id))}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleOpen} aria-label="edit">
          <EditIcon />
        </IconButton>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <ContactForm
                isEdit={true}
                contact={contact}
                onClose={handleClose}
                textBtn={'Edit contact'}
              />
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
};
