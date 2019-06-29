import React, { Component } from 'react';
import socket from '../../server/websocket';

import {
  Container, Chat, Header, Content, Footer,
} from './styles';

import Text from '../../components/Text';

import parrot from '../../assets/img/parrot-icon.png';
import user from '../../assets/img/default-user.png';

class Main extends Component {
  state = {
    message: '',
    messages: [],
    id: 1,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { message, messages, id } = this.state;

    const data = {
      msg: message,
      parrot: false,
      id,
    };

    await this.setState({ messages: [...messages, data], id: id + 1 });

    socket.send(message);
    await this.getWebSocketResponse();

    await this.setState({ message: '' });
  };

  getWebSocketResponse = () => {
    const { messages, id } = this.state;

    socket.onmessage = (event) => {
      const data = {
        msg: event.data,
        parrot: true,
        id,
      };

      this.setState({
        messages: [...messages, data],
        id: id + 1,
      });
    };
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { message, messages } = this.state;
    return (
      <Container>
        <Chat>
          <Header>
            <img src={parrot} alt="logo-parrot" />
          </Header>
          <Content>
            {messages.map(msg => (
              <Text key={msg.id} parrot={msg.parrot} msg={msg.msg} />
            ))}
          </Content>
          <Footer>
            <img src={user} alt="logo-user" />

            <form id="new-msg" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="message"
                placeholder="type a massage"
                autoComplete="off"
                onChange={this.handleChange}
                value={message}
              />
              <button type="submit">Enviar</button>
            </form>
          </Footer>
        </Chat>
      </Container>
    );
  }
}

export default Main;
