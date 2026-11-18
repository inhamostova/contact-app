import PeopleIcon from '@mui/icons-material/People';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon from '@mui/icons-material/Search';
import { Desc, Item, List, Title } from './Features.styled';

export const Features = () => {
  return (
    <List>
      <Item>
        <PeopleIcon sx={{ color: 'primary.main' }} />
        <Title>Easy management</Title>
        <Desc>Додавання, редагування та видалення контактів.</Desc>
      </Item>
      <Item>
        <VerifiedUserIcon sx={{ color: 'primary.main' }} />
        <Title>Private & secure</Title>
        <Desc>Особиста колекція контактів.</Desc>
      </Item>
      <Item>
        <SearchIcon sx={{ color: 'primary.main' }} />
        <Title>Quick search</Title>
        <Desc>Швидкий пошук потрібного контакту.</Desc>
      </Item>
    </List>
  );
};
