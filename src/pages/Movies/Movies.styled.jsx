import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  margin: 20px;
  display: flex;
  gap: 10px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    color: teal;
  }
`;
