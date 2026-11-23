import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <input type="text" name="filter" value={filter} onChange={handleChange} />
  );
};
