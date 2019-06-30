import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const TextChat = ({ parrot, message, image }) => (
  <Container isParrot={parrot}>
    {parrot ? (
      <>
        <img src={image} alt="user" />
        <div>
          <p>{message}</p>
        </div>
      </>
    ) : (
      <>
        <div>
          <p>{message}</p>
        </div>
        <img src={image} alt="user" />
      </>
    )}
  </Container>
);

TextChat.propTypes = {
  parrot: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TextChat;
