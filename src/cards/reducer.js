import {
  removeItemFromArrayByIndex,
  getRandomIndexFromArray,
} from '../functions/arrayFunctions';

export const SAVE_PLANETS = 'SAVE_PLANETS';
export const NEXT_PLANET = 'NEXT_PLANET';
export const FINISHED_FETCHING = 'FINISHED_FETCHING';
export const RESTART_GAME = 'RESTART_GAME';

const initialState = {
  planets: [],
  planetsUsed: [],
  fetchingPlanets: true,
  selectedPlanet: 0,
};

const defaultAction = {
  type: '',
};

export default (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case SAVE_PLANETS: {
      return {
        ...state,
        ...{
          planets: [
            ...action.payload,
            ...state.planets,
          ],
        },
      };
    }
    case NEXT_PLANET: {
      const newPlanets = removeItemFromArrayByIndex(state.selectedPlanet, state.planets);
      const planet = state.planets[state.selectedPlanet];
      const selectedPlanet = getRandomIndexFromArray(newPlanets);
      return {
        ...state,
        ...{
          planets: newPlanets,
          planetsUsed: [...state.planetsUsed, planet],
          selectedPlanet,
        },
      };
    }
    case FINISHED_FETCHING: {
      const selectedPlanet = getRandomIndexFromArray(state.planets);
      return {
        ...state,
        ...{
          fetchingPlanets: false,
          selectedPlanet,
        },
      };
    }
    case RESTART_GAME: {
      const newPlanets = [...state.planets, ...state.planetsUsed];
      const selectedPlanet = getRandomIndexFromArray(newPlanets);
      return {
        ...state,
        ...{
          planets: newPlanets,
          planetsUsed: [],
          selectedPlanet,
        },
      };
    }
    default:
      return state;
  }
};
