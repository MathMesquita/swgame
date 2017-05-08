/* global navigator */

import React from 'react';
import ReactDOM from 'react-dom';
import CardsWrapper from './cards/CardsWrapper';
import './index.sass';

const document = global.document;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/swgame-worker.js')
    .catch(console.error);
}

ReactDOM.render(
  <CardsWrapper />,
  document.getElementById('root'),
);
