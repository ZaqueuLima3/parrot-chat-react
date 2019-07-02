import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

class TextChat extends Component {
  // set the types for the props
  static propTypes = {
    parrot: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.hanldeScrollToBottom();
  }

  // set the list for using in the ref
  hanldeSetChatList = (element) => {
    this.chatList = element;
  };

  // scroll to end when it receive a new message
  hanldeScrollToBottom() {
    this.chatList.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { parrot, message, image } = this.props;
    return (
      <Container isParrot={parrot} ref={this.hanldeSetChatList}>
        {/* {if parrot is true render the text on left side else render on the right side} */}
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
  }
}

export default TextChat;
