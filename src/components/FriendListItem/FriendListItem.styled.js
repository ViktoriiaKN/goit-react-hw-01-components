import styled from 'styled-components';

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
  display: inline-block;
`;

export const FriendListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendListItemStyled = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const FriendListCard = styled.li`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;
