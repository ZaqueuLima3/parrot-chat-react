import React from 'react';

import { Container } from './styles';

const Text = ({ image, parrot, msg }) => (
  <Container parrot={parrot}>
    {parrot ? (
      <>
        <img src={image} alt="user" />
        <div>
          <p>{msg}</p>
        </div>
      </>
    ) : (
      <>
        <div>
          <p>{msg}</p>
        </div>
        <img src={image} alt="user" />
      </>
    )}
  </Container>
);

export default Text;
