import React from 'react';
import './cards.sass';

import Card from './Card';
import NextButton from './NextButton';

const CardsWrapper = () => (
  <div className="cards">
    <div className="cards-container">
      <Card
        planet="Tatooine"
        population={2000000}
        climate="Arid"
        terrain="Desert"
        films={4}
      />
      <NextButton clickHandler={() => {}} />
    </div>
  </div>
);

export default CardsWrapper;
