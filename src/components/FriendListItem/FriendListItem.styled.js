import styled from 'styled-components';

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
  display: inline-block;
`;
