import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </div>
  );
};
