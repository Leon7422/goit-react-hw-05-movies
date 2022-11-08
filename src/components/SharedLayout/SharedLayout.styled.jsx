import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navig = styled.nav`
  display: flex;
  gap: 50px;
  padding: 10px 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px 20px;

  :hover {
    background-color: #02818129;
    border-radius: 10px;
  }

  &.active {
    background-color: teal;
    border-radius: 10px;
    color: white;
  }
`;
