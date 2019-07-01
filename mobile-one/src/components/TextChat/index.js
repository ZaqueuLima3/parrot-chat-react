import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Chat, ImageUser, Content, TextContent,
} from './styles';

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

TextChat.propTypes = {
  parrot: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default TextChat;
