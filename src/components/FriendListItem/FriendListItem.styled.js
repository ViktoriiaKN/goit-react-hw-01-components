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
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
