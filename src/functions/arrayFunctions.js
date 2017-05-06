
/**
 * returns any valid index from array
 * @param {Array} array
 * @returns {number} randomed index
 */
export const getRandomIndexFromArray = (array) => {
  if (typeof array !== 'object') throw new TypeError(`was expecting an object array but got [${typeof array}]`);
  if (array.length < 1) return -1;

  const randomItem = Math.floor(array.length * Math.random());

  return randomItem;
};


/**
 * returns an array without the item of index passed
 * @param {number} itemIndex - index to be removed
 * @param {Array} array
 * @return {Array} array without the item of index passed
 */
export const removeItemFromArrayByIndex = (itemIndex, array) => {
  if (typeof itemIndex !== 'number') throw new TypeError('your index must be a positive integer');
  if (typeof array !== 'object') throw new TypeError(`was expecting an object array but got [${typeof array}]`);
  if (array.length < 1) throw new Error('your array is empty');
  if (itemIndex > (array.length - 1)) throw new Error('your index must be on array\'s range');

  return array.filter((item, index) => index !== itemIndex);
};

