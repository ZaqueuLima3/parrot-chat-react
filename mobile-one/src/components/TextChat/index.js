import React from "react";

import { Container, Chat, ImageUser, Content, TextContent } from "./styles";

const TextChat = ({ parrot, message, image }) => (
  <Container>
    {parrot ? (
      <Chat isParrot={parrot}>
        <ImageUser source={image} />
        <Content>
          <TextContent>{message}</TextContent>
        </Content>
      </Chat>
    ) : (
      <Chat isParrot={parrot}>
        <Content>
          <TextContent>{message}</TextContent>
        </Content>
        <ImageUser source={image} />
      </Chat>
    )}
  </Container>
);

export default TextChat;
