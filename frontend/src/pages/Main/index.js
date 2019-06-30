import React, { Component } from 'react';
import socket from '../../server/websocket';

import TextChat from '../../components/TextChat';

import ParrotImage from '../../assets/img/parrot-icon.png';
import UserImage from '../../assets/img/default-user.png';

import {
  Container, Chat, HeaderChat, ContentChat, FooterChat,
} from './styles';

class Main extends Component {
  state = {
    message: '',
    messages: [],
    id: 1,
  };

  /**
   * When the user send a message this function check if the field 'message' is true,
   * case is true the object data is seted and sended to array massages in the state,
   * after this the massage is send to webscoket and the return is seted in another object data.
   */
  handleSubmit = async (e) => {
    e.preventDefault();

    const { message, messages, id } = this.state;

    if (!message) return;

    const data = {
      message,
      parrot: false,
      id,
    };

    await this.setState({ messages: [...messages, data], id: id + 1 });

    socket.send(message);
    await this.handleSocketResponse();

    await this.setState({ message: '' });
  };

  handleSocketResponse = () => {
    const { messages, id } = this.state;

    socket.onmessage = (event) => {
      const data = {
        message: event.data,
        parrot: true,
        id,
      };

      this.setState({
        messages: [...messages, data],
        id: id + 1,
      });
    };
  };

  /**
   * When the user starts typing text, the value is sent to the message in the status
   */
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { message, messages } = this.state;

    return (
      <Container>
        <Chat>
          <HeaderChat>
            <img src={ParrotImage} alt="logo-parrot" />
          </HeaderChat>

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
              <input
                type="text"
                name="message"
                placeholder="Digite sua mensagem"
                autoComplete="off"
                onChange={this.handleChange}
                value={message}
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
