import React from 'react';

import {
  Container, Header, Content, Footer,
} from './styles';

import Text from '../Text';

import parrot from '../../assets/img/parrot-icon.png';
import user from '../../assets/img/default-user.png';

const Chat = () => (
  <Container>
    <Header>
      <img src={parrot} alt="logo-parrot" />
    </Header>
    <Content>
      <Text image={user} parrot={false} msg="hello this is my first text" />
      <Text image={parrot} parrot msg="hello this is my first text" />

      <Text image={user} parrot={false} msg="Do you remind me?" />
      <Text image={parrot} parrot msg="Do you remind me?" />

      <Text
        image={user}
        parrot={false}
        msg="this is a big msg to test how i can write in engligh and wrap de line"
      />
      <Text
        image={parrot}
        parrot
        msg="this is a big msg to test how i can write in engligh and wrap de line"
      />
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
