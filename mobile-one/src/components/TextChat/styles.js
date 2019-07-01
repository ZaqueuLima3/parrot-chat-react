import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Chat = styled.View`
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.isParrot ? "flex-start" : "flex-end")};
`;

export const ImageUser = styled.Image`
  width: 30px;
  height: 30px;
  margin: 0 10px;

  background-color: #7297a6;
  border-radius: 15px;
`;

export const Content = styled.View`
  padding: 10px;
  max-width: 180px;

  background-color: #d3d3d3;
  border-radius: 10px;
`;

export const TextContent = styled.Text``;
