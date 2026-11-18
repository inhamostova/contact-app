import styled from '@emotion/styled';

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
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
