import React from 'react';

import {
  Container, Header, Content, Footer,
} from './styles';
import parrot from '../../assets/img/parrot-icon.png';
import user from '../../assets/img/default-user.png';

const Chat = () => (
  <Container>
    <Header>
      <img src={parrot} alt="logo-parrot" />
    </Header>
    <Content>
      <div />
    </Content>
    <Footer>
      <img src={user} alt="logo-parrot" />

      <form>
        <input type="text" name="msg" placeholder="type a massage" autoComplete="off" />
        <button type="submit">Enviar</button>
      </form>
    </Footer>
  </Container>
);

export default Chat;
