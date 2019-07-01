import React, { Component } from "react";
import socket from "../../services/websocket";

import TextChat from "../../components/TextChat";

import ParrotImage from "../../assets/img/parrot-icon.png";
import UserImage from "../../assets/img/default-user.png";

import {
  Container,
  Chat,
  HeaderChat,
  ImageHader,
  ContentChat,
  FooterChat,
  Button,
  TextButton,
  Input
} from "./styles";

import { stringify } from "jest-matcher-utils";

export default class Main extends Component {
  state = {
    message: "",
    messages: [],
    id: 1
  };

  handleSubmit = async () => {
    const { message, messages, id } = this.state;

    if (!message) return;

    const data = {
      message,
      parrot: false,
      id
    };

    await this.setState({ messages: [...messages, data], id: id + 1 });

    socket.send(message);
    await this.handleSocketResponse();

    await this.setState({ message: "" });
  };

  handleSocketResponse = () => {
    const { messages, id } = this.state;

    socket.onmessage = event => {
      const data = {
        message: event.data,
        parrot: true,
        id
      };

      this.setState({
        messages: [...messages, data],
        id: id + 1
      });
    };
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
            keyExtractor={item => stringify(item.id)}
            ref="flatList"
            onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
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
              multiline={true}
              autoCapitalize="none"
              placeholderTextColor="#999"
              value={message}
              onChangeText={message => this.setState({ message })}
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
