

/**
 * Filters unused planet data
 * @param {Object} planet - object containing planet data
 * @returns {Object} filtered object
 */
export const filterUnusedPlanetFields = (planet) => {
  const {
    name,
    climate,
    terrain,
    population,
    films,
  } = planet;

  return {
    planet: name,
    climate,
    terrain,
    population,
    films: films.length,
  };
};

/**
 * Pass all items through filterUnusedPlanetFields function
 * @param {Array} planets - array containing objects with planet info
 * @returns {Array} planets filtered
 */
export const filterUnusedPlanetsFields = planets => planets.map(filterUnusedPlanetFields);

