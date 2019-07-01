import React, { Component } from 'react';
import socket from '../../services/websocket';

import TextChat from '../../components/TextChat';

import ParrotImage from '../../assets/img/parrot-icon.png';
import UserImage from '../../assets/img/default-user.png';

import {
  Container, Chat, HeaderChat, ContentChat, FooterChat, Input, Error,
} from './styles';

class Main extends Component {
  state = {
    message: '',
    messages: [],
    id: 1,
    error: false,
    errorMessage: '',
  };

  /**
   * When the user send a message this function check if the field 'message' is true,
   * case is true the object data is seted and sended to array massages in the state.
   */
  handleSubmit = async (e) => {
    e.preventDefault();

    const { message, messages, id } = this.state;

    // verify that the message has been sent
    if (!message) {
      this.setState({ error: true, errorMessage: 'Por favor, digite uma mensagem!' });
      return;
    }

    // verify that the websocket is closed
    if (socket.readyState === 3) {
      this.setState({ error: true, errorMessage: 'Não foi possível se conectar com o servidor!' });
      return;
    }

    const data = {
      message,
      parrot: false,
      id,
    };

    // send the massage to array in state
    await this.setState({ messages: [...messages, data], id: id + 1, error: false });

    // send the massage to websocket
    socket.send(message);
    await this.handleSocketResponse();

    // clears the input when the message is sent
    await this.setState({ message: '' });
  };

  // receives the data from the websocket and sends it to the message array
  handleSocketResponse = () => {
    const { messages, id } = this.state;

    // receive the message from the websocket
    socket.onmessage = (event) => {
      const data = {
        message: event.data,
        parrot: true,
        id,
      };

      // send the massage to array in state
      this.setState({ messages: [...messages, data], id: id + 1, error: false });
    };
  };

  // When the user starts typing text, the value is sent to the message in the status
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      message, messages, error, errorMessage,
    } = this.state;

    return (
      <Container>
        <Chat>
          <HeaderChat>
            <img src={ParrotImage} alt="logo-parrot" />
          </HeaderChat>
          {error && (
            <Error>
              <p>{errorMessage}</p>
            </Error>
          )}

          {/* {renders message content} */}
          <ContentChat>
            {messages.map(msg => (
              <TextChat
                key={msg.id}
                parrot={msg.parrot}
                message={msg.message}
                image={msg.parrot ? ParrotImage : UserImage}
              />
            ))}
          </ContentChat>

          <FooterChat>
            <img src={UserImage} alt="logo-user" />

            <form id="new-msg" onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="message"
                placeholder="Digite sua mensagem"
                autoComplete="off"
                onChange={this.handleChange}
                value={message}
                error={error}
              />

              <button type="submit">Enviar</button>
            </form>
          </FooterChat>
        </Chat>
      </Container>
    );
  }
}

export default Main;
