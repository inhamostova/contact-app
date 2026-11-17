import { Button } from '@mui/material';
import book from '../../images/book.png';
import {
  Container,
  ContainerFlex,
  Btn,
  Wrapper,
  Title,
  Desc,
} from './WelcomeHero.styled';
import { NavLink } from 'react-router-dom';

export const WelcomeHero = () => {
  return (
    <Container>
      <ContainerFlex>
        {' '}
        <Wrapper>
          <Title>Your contacts. One place.</Title>
          <Desc>
            Keep your connections close. Manage your contacts easily and
            securely.
          </Desc>
        </Wrapper>
        <img src={book} alt="phone-book" width={320} />
      </ContainerFlex>
      <Btn>
        <Button
          component={NavLink}
          to="/register"
          variant="contained"
          size="large"
          type="button"
        >
          Get started
        </Button>
      </Btn>
    </Container>
  );
};
