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
      <Btn variant="contained" size="large" type="button">
        <NavLink
          style={{ color: 'currentColor', textDecoration: 'none' }}
          to="/register"
        >
          Get started
        </NavLink>
      </Btn>
    </Container>
  );
};
