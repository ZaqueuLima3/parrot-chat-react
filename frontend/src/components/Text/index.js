import React from 'react';

import { Container } from './styles';

import Parrot from '../../assets/img/parrot-icon.png';
import User from '../../assets/img/default-user.png';

const Text = ({ parrot, msg }) => (
  <Container parrot={parrot}>
    {parrot ? (
      <>
        <img src={Parrot} alt="user" />
        <div>
          <p>{msg}</p>
        </div>
      </>
    ) : (
      <>
        <div>
          <p>{msg}</p>
        </div>
        <img src={User} alt="user" />
      </>
    )}
  </Container>
);

export default Text;
