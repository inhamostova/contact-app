import PeopleIcon from '@mui/icons-material/People';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon from '@mui/icons-material/Search';
import { Desc, Item, List, Title } from './Features.styled';

export const Features = () => {
  return (
    <List>
      <Item>
        <PeopleIcon sx={{ color: 'rgb(25, 118, 210)' }} />
        <Title>Easy management</Title>
        <Desc>Додавання, редагування та видалення контактів.</Desc>
      </Item>
      <Item>
        <VerifiedUserIcon sx={{ color: 'rgb(25, 118, 210)' }} />
        <Title>Private & secure</Title>
        <Desc>Особиста колекція контактів.</Desc>
      </Item>
      <Item>
        <SearchIcon sx={{ color: 'rgb(25, 118, 210)' }} />
        <Title>Quick search</Title>
        <Desc>Швидкий пошук потрібного контакту.</Desc>
      </Item>
    </List>
  );
};
