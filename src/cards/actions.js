import {
  NEXT_PLANET,
  SAVE_PLANETS,
  FINISHED_FETCHING,
  RESTART_GAME,
} from './reducer';

import compose from '../functions/compose';

import {
  filterUnusedPlanetsFields,
} from './functions/planetFunctions';

export const nextPlanetAction = () => (
  {
    type: NEXT_PLANET,
  }
);

export const finishedFetching = () => (
  {
    type: FINISHED_FETCHING,
  }
);

export const restartGame = () => (
  {
    type: RESTART_GAME,
  }
);

export const savePlanetsAction = planets => (
  {
    type: SAVE_PLANETS,
    payload: planets,
  }
);

export const
  savePlanets = compose(
    savePlanetsAction,
    filterUnusedPlanetsFields,
  );
