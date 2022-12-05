import styled from 'styled-components';

export const Container = styled.View`
  width: 170px;
  height: 219px;
  border-radius: 15px;
  background-color: #48d0b0;
  align-items: center;
  margin-bottom: 10px;
`;

export const IdArea = styled.View`
  width: 49px;
  height: 17px;
  border-radius: 10px;
  background-color: #ffcb05;
  position: absolute;
  margin-top: -5px;
  align-items: center;
`;

export const IdText = styled.Text`
  font-size: 14px;
  color: #21386e;
`;

export const AreaImage = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 99px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const NamePokemon = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-top: 2%;
`;

export const PowerItem = styled.View`
  width: 58px;
  height: 20px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 20px;
  align-items: center;
`;

export const PowerItemText = styled.Text`
  font-size: 12px;
  color: white;
`;

export const PowerArea = styled.View`
  width: 70%;
  margin-top: 2%;
  justify-content: space-between;
  flex-direction: row;

`;
