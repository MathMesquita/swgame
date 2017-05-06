import {
  filterUnusedPlanetFields,
} from '../functions/planetFunctions';

import planetsResponseSample from '../../planetsResponseSample';

it('filters data from a single planet entry', () => {
  const expected = {
    planet: 'Alderaan',
    climate: 'temperate',
    terrain: 'grasslands, mountains',
    population: '2000000000',
    films: 2,
  };

  expect(filterUnusedPlanetFields(planetsResponseSample[0])).toEqual(expected);
});
