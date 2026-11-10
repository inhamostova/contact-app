import { useSelector } from 'react-redux';
import {
  selectContactError,
  selectContacts,
  selectIsLoading,
} from '../redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectContactError);

  return {
    isLoading,
    contacts,
    error,
  };
};
