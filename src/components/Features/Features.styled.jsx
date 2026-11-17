import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 2 * 32px) / 3);
  font-family: 'Roboto', sans-serif;
  color: #2c2c2c;
  background-color: rgba(222, 232, 248, 0.7);
  padding: 8px 20px;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const Desc = styled.p`
  margin: 0;

  font-size: 16px;
`;
