import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  font-family: sans-serif;
  font-size: 400;
  width: 180px;
  height: 100%;
  display: flex;
  padding: 40px 80px;
  flex-direction: column;
  align-items: center;
  border: 2px solid;
`;

export const Img = styled.img`
  border-radius: 50%;
`;

export const ProfileList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatsWrapper = styled.li`
  display: flex;
`;

export const StatsList = styled.span`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  text-align: center;
  padding: 10px;
  width: 91px;
`;
