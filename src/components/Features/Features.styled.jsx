import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 32px;
  list-style: none;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 2 * 32px) / 3);
  font-family: 'Roboto', sans-serif;
  color: #2c2c2c;
`;

export const Title = styled.h1`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 20px;
  /* text-align: center; */
`;

export const Desc = styled.p`
  margin: 0;

  font-size: 16px;
`;
