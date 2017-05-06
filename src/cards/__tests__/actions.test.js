import {
  savePlanetsAction,
  nextPlanetAction,
  finishedFetching,
  restartGame,
} from '../actions';

import planetsResponseSample from '../../planetsResponseSample';

it('returns NEXT_PLANET action type', () => {
  expect(nextPlanetAction(1))
    .toEqual({
      type: 'NEXT_PLANET',
    });
});

it('returns SAVE_PLANETS action type', () => {
  expect(savePlanetsAction(planetsResponseSample))
    .toEqual({
      type: 'SAVE_PLANETS',
      payload: planetsResponseSample,
    });
});

it('returns FINISHED_FETCHING action type', () => {
  expect(finishedFetching())
    .toEqual({
      type: 'FINISHED_FETCHING',
    });
});

it('returns RESTART_GAME action type', () => {
  expect(restartGame())
    .toEqual({
      type: 'RESTART_GAME',
    });
});

