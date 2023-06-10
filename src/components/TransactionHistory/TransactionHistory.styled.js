import styled from 'styled-components';

export const TransactionTable = styled.table`
  display: flex;
  align-items: center;
  width: 800px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TransactionItem = styled.tbody`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  border: 1px solid #000;
  padding: 10px;
`;
