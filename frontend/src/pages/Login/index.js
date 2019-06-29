import React from 'react';

import { Container } from './styles';
import parrot from '../../assets/parrot-icon.png';

const Login = () => (
  <Container>
    <form>
      <img src={parrot} alt="logo-parrot" />
      <h3>Login</h3>
      <input type="text" name="name" placeholder="Digite seu nome" />
      <button type="submit">Entrar</button>
    </form>
  </Container>
);

export default Login;
