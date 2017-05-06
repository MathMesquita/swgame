import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from '../Card';
it('renders Card component', () => {
  const card = renderer.create(
    <Card
      planet="Tatooine"
      population="2000000"
      climate="Arid"
      terrain="Desert"
      films={4}
    />
  );
  let tree = card.toJSON();
  expect(tree).toMatchSnapshot();

});

import Button from '../Button';
it('renders Button component', () => {
  const nextBtn = renderer.create(
    <Button
      clickHandler={() => {}}
      label="btntext"
    />,
  );
  let tree = nextBtn.toJSON();

  expect(tree).toMatchSnapshot();
});

import Warning from '../Warning';
it('renders Warning component', () => {
  const warning = renderer.create(
    <Warning />,
  );
  let tree = warning.toJSON();

  expect(tree).toMatchSnapshot();
});