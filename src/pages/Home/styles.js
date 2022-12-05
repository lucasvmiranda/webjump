import styled from 'styled-components';

export const Container = styled.ScrollView``;

export const Content = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #21386e;
  line-height: 24px;
  font-weight: bold;
  padding: 25px 0px;
`;

export const AreaCards = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
`;

export const AreaInput = styled.View`
  /* background-color: green; */
  width: 100%;
  height: auto;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  height: auto;
  padding: 0 15px;
  width: 88%;
  height: 40px;
`;

export const AreaInputSearch = styled.View`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #3663ad;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
`;
