import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/operations';
import { useContacts } from '../../hooks/useContacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
