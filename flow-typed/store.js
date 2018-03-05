// @flow

declare type GlobalStore = {
  planets: Planet[],
  planetsUsed: Planet[],
  fetchingPlanets: boolean,
  selectedPlanet: number
};
