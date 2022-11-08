import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MovieItem = styled(Link)`
  color: black;
  :hover {
    color: teal;
  }
`;
