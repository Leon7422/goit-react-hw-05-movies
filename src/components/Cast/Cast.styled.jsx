import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  gap: 20px;
`;

export const CastItem = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
