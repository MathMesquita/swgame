import React from 'react';
import ReactDOM from 'react-dom';
import CardsWrapper from './cards/CardsWrapper';
import './index.sass';

const document = global.document;

ReactDOM.render(
  <CardsWrapper />,
  document.getElementById('root'),
);
