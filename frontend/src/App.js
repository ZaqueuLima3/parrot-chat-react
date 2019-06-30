import React from 'react';

import Base from './styles/base';
import Reset from './styles/generic/reset';

import Colors from './styles/settings/colors';
import Spacing from './styles/settings/spacing';
import Size from './styles/settings/size';

import Main from './pages/Main';

const App = () => (
  <>
    <Colors />
    <Size />
    <Spacing />
    <Reset />
    <Base />
    <Main />
  </>
);

export default App;
