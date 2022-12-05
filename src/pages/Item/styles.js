import styled from 'styled-components';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Content = styled.View`
  width: 90%;
  height: 95%;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 15px;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #21386e;
  line-height: 24px;
  font-weight: bold;
  padding: 15px 0px;
`;

export const Header = styled.View`
  background-color: #48d0b0;
  height: 140px;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IdArea = styled.View`
  width: 48px;
  height: 20px;
  border-radius: 10px;
  background-color: #ffcb05;
  align-items: center;
  margin-top: 15px;
  padding: 1px;
`;

export const IdText = styled.Text`
  font-size: 15px;
  color: #21386e;
`;

export const AreaImage = styled.View`
  width: 131px;
  height: 131px;
  border-radius: 99px;
  background-color: #71e5c9;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const AreaAvatar = styled.View`
  align-items: center;
  width: 50%;
`;

export const AreaInfo = styled.View`
  width: 50%;
  padding: 10px;
  align-items: flex-start;
  flex-direction: column;
`;

export const NamePokemon = styled.Text`
  font-size: 26px;
  color: white;
  font-weight: bold;
`;

export const PowerItem = styled.View`
  width: 63px;
  height: 25px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 20px;
  margin-top: 2px;
  align-items: center;
`;

export const PowerItemText = styled.Text`
  font-size: 15px;
  color: white;
`;

export const PowerArea = styled.View`
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Description = styled.Text`
  color: #21386e;
  font-size: 15px;
  text-align: center;
  padding: 0 15px;
`;

export const AreaDescription = styled.View`
  width: 95%;
  margin-top: 10%;
  height: auto;
`;

export const AreaFeatures = styled.View`
  width: 95%;
  margin-top: 5%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
`;

export const ItemFeature = styled.View`
  max-width: 120px;
  align-items: center;
`;

export const TitleFeature = styled.Text`
  font-size: 12px;
  color: #395ba7;
`;

export const BoxFeature = styled.View`
  max-width: 100px;
  height: 26px;
  background-color: #45c0a3;
  align-items: center;
  border-radius: 20px;
  padding: 2px 10px;
`;

export const TextBoxFeature = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const AreaList = styled.View`
  width: 100%;
  height: auto;
  padding: 5%;
`;

export const AreaLine = styled.View`
  width: 100%;
  height: 35px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1px;
  flex-direction: row;
  padding: 0 20px;
`;

export const TextLine = styled.Text`
  font-size: 15px;
  color: #21386e;
`;

export const ProgressBarArea = styled.View`
  width: auto;
  flex-direction: row;
  align-items: center;
`;
