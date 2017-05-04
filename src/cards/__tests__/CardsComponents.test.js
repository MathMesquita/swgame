import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from '../Card';
it('renders Card component', () => {
  const card = renderer.create(
    <Card
      planet="Tatooine"
      population={2000000}
      climate="Arid"
      terrain="Desert"
      films={4}
    />
  );
  let tree = card.toJSON();
  expect(tree).toMatchSnapshot();

});

import NextButton from '../NextButton';
it('renders NextButton component', () => {
  const nextBtn = renderer.create(
    <NextButton clickHandler={() => {}} />,
  );
  let tree = nextBtn.toJSON();

  expect(tree).toMatchSnapshot();
});