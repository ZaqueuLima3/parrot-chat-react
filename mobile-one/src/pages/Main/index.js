import React, { Component } from 'react';
import socket from '../../services/websocket';

import TextChat from '../../components/TextChat';

import ParrotImage from '../../assets/img/parrot-icon.png';
import UserImage from '../../assets/img/default-user.png';

import {
  Container,
  Chat,
  HeaderChat,
  ImageHader,
  ContentChat,
  FooterChat,
  Button,
  TextButton,
  Input,
} from './styles';

export default class Main extends Component {
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
  handleSubmit = async () => {
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

  hanldeSetFlatList = (element) => {
    this.flatList = element;
  };

  handleFocusFlatList = () => {
    if (this.flatList) this.flatList.scrollToEnd();
  };

  render() {
    const { message, messages } = this.state;
    return (
      <Container>
        <Chat>
          <HeaderChat>
            <ImageHader source={ParrotImage} />
          </HeaderChat>

          <ContentChat
            data={messages}
            keyExtractor={item => String(item.id)}
            ref={this.hanldeSetFlatList}
            onContentSizeChange={this.handleFocusFlatList}
            renderItem={({ item }) => (
              <TextChat
                parrot={item.parrot}
                message={item.message}
                image={item.parrot ? ParrotImage : UserImage}
              />
            )}
          />

          <FooterChat>
            <Input
              placeholder="type a massage"
              autoCorrect={false}
              multiline
              autoCapitalize="none"
              placeholderTextColor="#999"
              value={message}
              onChangeText={msg => this.setState({ message: msg })}
            />
            <Button onPress={this.handleSubmit}>
              <TextButton>Enviar</TextButton>
            </Button>
          </FooterChat>
        </Chat>
      </Container>
    );
  }
}
