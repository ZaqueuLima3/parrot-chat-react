import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
`;

export const Chat = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;

  background-color: #f2f2f2;
`;

export const HeaderChat = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;

  background-color: #2f6073;
`;

export const Error = styled.View`
  width: 100%;
  padding: 5px;

  background-color: #dc3545;
`;

export const TextError = styled.Text`
  width: 100%;
  text-align: center;
  color: #fff;
`;

export const ImageHader = styled.Image`
  height: 40px;
  width: 40px;

  background-color: #7297a6;
  border-radius: 20px;
`;

export const ContentChat = styled.FlatList`
  flex: 1;
  width: 100%;
  padding: 10px;
`;

export const FooterChat = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  padding: 10px;

  background-color: #fff;
  border-width: 1;
  border-radius: 10px;
  border-color: ${props => (props.error ? '#dc3545' : '#f3f3f3')};
`;

export const Button = styled.TouchableOpacity`
  padding: 8px;

  background-color: #7297a6;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
