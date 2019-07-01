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
  Error,
  TextError,
} from './styles';

export default class Main extends Component {
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
  handleSubmit = async () => {
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

  // set the flatlist for using in the ref
  hanldeSetFlatList = (element) => {
    this.flatList = element;
  };

  // scroll to end when it receive a new message
  handleFocusFlatList = () => {
    if (this.flatList) this.flatList.scrollToEnd();
  };

  render() {
    const {
      message, messages, error, errorMessage,
    } = this.state;
    return (
      <Container>
        <Chat>
          <HeaderChat>
            <ImageHader source={ParrotImage} />
          </HeaderChat>
          {error && (
            <Error>
              <TextError>{errorMessage}</TextError>
            </Error>
          )}

          {/* {renders message content in the flatlist} */}
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
              placeholder="Digite sua mensagem"
              autoCorrect={false}
              multiline
              autoCapitalize="none"
              placeholderTextColor="#999"
              value={message}
              onChangeText={msg => this.setState({ message: msg })}
              error={error}
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
