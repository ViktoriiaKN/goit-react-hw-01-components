import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  text-align: center;
  padding: 10px;
  width: 91px;
`;
