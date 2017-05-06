import planetsReducer from '../reducer';

import {
  savePlanetsAction,
  nextPlanetAction,
  finishedFetching,
  restartGame,
} from '../actions';

let store = planetsReducer();

it('tests if reducer is initialized without errors', () => {
  const expected = {
    planets: [],
    planetsUsed: [],
    selectedPlanet: 0,
    fetchingPlanets: true,
  };

  expect(store).toEqual(expected);
});

let planets = ['planet1', 'planet2', 'planet3', 'planet4', 'planet5', 'planet6', 'planet7', 'planet8', 'planet9', 'planet10'];
it('tests if planets are being saved on store', () => {

  const expected = {
    planets,
    planetsUsed: [],
    selectedPlanet: 0,
    fetchingPlanets: true,
  };

  store = planetsReducer(store, savePlanetsAction(planets));

  expect(store).toEqual(expected);
});

it('tests if finished fecthing is saved on store', () => {
  const mockedMath = Object.create(global.Math);
  mockedMath.random = () => 0.3;
  global.Math = mockedMath;

  const expected = {
    planets,
    planetsUsed: [],
    selectedPlanet: 3,
    fetchingPlanets: false,
  };

  store = planetsReducer(store, finishedFetching());
  expect(store).toEqual(expected);
});

it('tests if selected planet is changed', () => {
  const mockedMath = Object.create(global.Math);
  mockedMath.random = () => 0.7;
  global.Math = mockedMath;

  planets = ['planet1', 'planet2', 'planet3', 'planet5', 'planet6', 'planet7', 'planet8', 'planet9', 'planet10'];

  const expected = {
    planets,
    planetsUsed: ['planet4'],
    selectedPlanet: 6,
    fetchingPlanets: false,
  };

  store = planetsReducer(store, nextPlanetAction());
  expect(store).toEqual(expected);
});

it('tests if game is being restarded on store', () => {
  const mockedMath = Object.create(global.Math);
  mockedMath.random = () => 0.1;
  global.Math = mockedMath;

  planets = ['planet1', 'planet2', 'planet3', 'planet5', 'planet6', 'planet7', 'planet8', 'planet9', 'planet10', 'planet4'];

  const expected = {
    planets,
    planetsUsed: [],
    selectedPlanet: 1,
    fetchingPlanets: false,
  };

  store = planetsReducer(store, restartGame());
  expect(store).toEqual(expected);
});
