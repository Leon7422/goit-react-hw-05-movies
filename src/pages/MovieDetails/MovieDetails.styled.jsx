import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ErrorMessage = styled.div`
  display: flex;
  margin: 20px;
`;

export const SectionAdditionalInformation = styled.section`
  margin: 5px 0;
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const BackLink = styled(Link)`
  display: flex;
  width: 75px;
  margin: 5px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;

  :hover {
    background-color: #02818129;
    border-radius: 10px;
  }
`;

export const GenresInfo = styled.p`
  display: flex;
  gap: 10px;
`;

export const AddList = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const AddLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;

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
