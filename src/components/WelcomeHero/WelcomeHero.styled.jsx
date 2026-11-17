import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
  padding: 72px 20px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  max-width: 320px;
  font-family: 'Roboto', sans-serif;
  color: #2c2c2c;
`;

export const Btn = styled(Button)`
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 48px;
  font-size: 48px;
  text-align: center;
`;

export const Desc = styled.p`
  margin: 0;

  font-size: 20px;
`;
