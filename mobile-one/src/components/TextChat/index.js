import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Chat, ImageUser, Content, TextContent,
} from './styles';

const TextChat = ({ parrot, message, image }) => (
  <Container>
    {/* {if parrot is true render the text on left side else render on the right side} */}
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

// set the types for the props
TextChat.propTypes = {
  parrot: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default TextChat;
