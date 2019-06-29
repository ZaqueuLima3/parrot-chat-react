import React from 'react';

import Routes from './routes';

import Base from './styles/base';
import Reset from './styles/generic/reset';

import Colors from './styles/settings/colors';
import Spacing from './styles/settings/spacing';
import Size from './styles/settings/size';

const App = () => (
  <>
    <Colors />
    <Size />
    <Spacing />
    <Reset />
    <Base />
    <Routes />
  </>
);

export default App;
