import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/operations';
import { useContacts } from '../../hooks/useContacts';
import Grid from '@mui/material/Grid';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase().trim());
  });

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {visibleContacts.map(contact => (
        <Grid size={{ xs: 12, sm: 6 }} key={contact.id}>
          <ContactItem contact={contact} />
        </Grid>
      ))}
    </Grid>
  );
};
