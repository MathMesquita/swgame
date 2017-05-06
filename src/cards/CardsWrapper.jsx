/* global fetch */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/cards.sass';
import './styles/loader.sass';

import Card from './Card';
import Button from './Button';
import Warning from './Warning';

import cardsReducer from './reducer';

import addHttpsToUrl from '../functions/addHttpsToURL';

import {
  savePlanets,
  nextPlanetAction,
  finishedFetching,
  restartGame,
} from './actions';

import reduxer from '../HOCS/reduxer';

class CardsWrapper extends Component {
  constructor(props) {
    super(props);

    this.restartGame = this.restartGame.bind(this);
    this.moveToNextPlanet = this.moveToNextPlanet.bind(this);
  }

  componentWillMount() {
    this.fetchPlanetsData('https://swapi.co/api/planets/?page=1');
  }

  fetchPlanetsData(page) {
    /*
      apparently when we use recursive strategy to
      retrieve all planets using the next page attr
      from response, they don't send to us an https
      url, this way we need to add it manually.
    */
    fetch(addHttpsToUrl(page))
      .then(response => response.json())
      .then(({ next, results }) => {
        this.props.dispatch(savePlanets(results));

        if (next) this.fetchPlanetsData(next);
        else this.props.dispatch(finishedFetching());
      })
      .catch(console.error); // eslint-disable-line no-console
  }

  moveToNextPlanet() {
    const { dispatch } = this.props;

    dispatch(nextPlanetAction());
  }

  restartGame() {
    const { dispatch } = this.props;

    dispatch(restartGame());
  }

  render() {
    const {
      fetchingPlanets,
      selectedPlanet,
      planets,
    } = this.props;

    return (
      <div className="cards">
        <div className="cards-container">

          {fetchingPlanets && <div className="loader" /> }

          {(!fetchingPlanets && planets.length) &&
            <CardWithButton
              {...{
                planets,
                selectedPlanet,
                buttonHandler: this.moveToNextPlanet,
              }}
            />
          }
          {(!fetchingPlanets && !planets.length) &&
            <WarningWithButton buttonHandler={this.restartGame} />
          }
        </div>
      </div>
    );
  }
}

CardsWrapper.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      planet: PropTypes.string.isRequired,
      climate: PropTypes.string.isRequired,
      terrain: PropTypes.string.isRequired,
      population: PropTypes.string.isRequired,
      films: PropTypes.number,
    }),
  ).isRequired,
  fetchingPlanets: PropTypes.bool.isRequired,
  selectedPlanet: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default reduxer(
  cardsReducer,
)(CardsWrapper);

const CardWithButton = ({ planets, selectedPlanet, buttonHandler }) => (
  <div>
    <Card {...planets[selectedPlanet]} />
    <Button
      clickHandler={buttonHandler}
      label="next"
    />
  </div>
);
CardWithButton.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      planet: PropTypes.string.isRequired,
      climate: PropTypes.string.isRequired,
      terrain: PropTypes.string.isRequired,
      population: PropTypes.string.isRequired,
      films: PropTypes.number,
    }),
  ).isRequired,
  selectedPlanet: PropTypes.number.isRequired,
  buttonHandler: PropTypes.func.isRequired,
};

const WarningWithButton = ({ buttonHandler }) => (
  <div>
    <Warning />
    <Button
      clickHandler={buttonHandler}
      label="restart game"
    />
  </div>
);
WarningWithButton.propTypes = {
  buttonHandler: PropTypes.func.isRequired,
};
