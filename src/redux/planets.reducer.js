// @flow
import {
  removeItemFromArrayByIndex,
  getRandomIndexFromArray
} from "../utils/arrayFunctions";

export const SAVE_PLANETS = "SAVE_PLANETS";
type savePlanetsType = "SAVE_PLANETS";
export type SavePlanetsAction = {
  type: savePlanetsType,
  payload: Planet[]
};

export const NEXT_PLANET = "NEXT_PLANET";
type NextPlanetType = "NEXT_PLANET";
export type NextPlanetAction = { type: NextPlanetType };

export const FINISHED_FETCHING = "FINISHED_FETCHING";
type FinishedFetchingType = "FINISHED_FETCHING";
export type FinishedFetchingAction = { type: FinishedFetchingType };

type Action = SavePlanetsAction | NextPlanetAction | FinishedFetchingAction;

const initialState: State = {
  planets: [],
  planetsUsed: [],
  fetchingPlanets: true,
  selectedPlanet: 0
};

type State = GlobalStore;

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SAVE_PLANETS: {
      return {
        ...state,
        ...{
          planets: [...action.payload, ...state.planets]
        }
      };
    }
    case NEXT_PLANET: {
      const newPlanets = removeItemFromArrayByIndex(
        state.selectedPlanet,
        state.planets
      );
      const planet = state.planets[state.selectedPlanet];
      const selectedPlanet = getRandomIndexFromArray(newPlanets);
      return {
        ...state,
        ...{
          planets: newPlanets,
          planetsUsed: [...state.planetsUsed, planet],
          selectedPlanet
        }
      };
    }
    case FINISHED_FETCHING: {
      const selectedPlanet = getRandomIndexFromArray(state.planets);
      return {
        ...state,
        ...{
          fetchingPlanets: false,
          selectedPlanet
        }
      };
    }
    default:
      return state;
  }
};

export const savePlanetsAction = (planets: Planet[]): SavePlanetsAction => ({
  type: SAVE_PLANETS,
  payload: planets
});

export const nextPlanetAction = (): NextPlanetAction => ({
  type: NEXT_PLANET
});

export const finishedFetchingAction = (): FinishedFetchingAction => ({
  type: FINISHED_FETCHING
});
