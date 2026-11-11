import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../../redux/contacts/operations';
import { useContacts } from '../../hooks/useContacts';

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string().phone('UA', true).required('Required'),
});

const isInContactsList = ({ name, id }, contacts) => {
  return contacts.find(
    contact =>
      contact.id !== id &&
      contact.name.toLowerCase() === name.toLowerCase().trim()
  );
};

export const ContactForm = ({
  onClose,
  textBtn,
  isEdit = false,
  contact = null,
}) => {
  const { contacts } = useContacts();
  const dispatch = useDispatch();

  const handleDispatch = values => {
    !isEdit
      ? dispatch(addContact(values))
      : dispatch(editContact({ id: contact.id, ...values }));
  };

  return (
    <Formik
      initialValues={{
        name: isEdit ? contact.name : '',
        number: isEdit ? contact.number : '',
      }}
      validationSchema={Schema}
      onSubmit={(values, { resetForm }) => {
        if (isInContactsList({ id: contact.id, ...values }, contacts)) {
          alert('This contact already exsist');
          return;
        }

        // if (isInContactsList(values, contacts)) {
        //   alert('This contact already exsist');
        //   return;
        // }
        handleDispatch(values);
        resetForm();
        onClose();
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Box
          component="form"
          sx={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            padding: '50px',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            error={errors.name && touched.name}
            helperText={errors.name}
            variant="standard"
            label="Name"
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />

          <TextField
            error={errors.number && touched.number}
            helperText={errors.number}
            variant="standard"
            label="Phone number"
            type="text`"
            name="number"
            onChange={handleChange}
            value={values.number}
          />

          <Button variant="contained" type="submit">
            {textBtn}
          </Button>
        </Box>
      )}
    </Formik>
  );
};
