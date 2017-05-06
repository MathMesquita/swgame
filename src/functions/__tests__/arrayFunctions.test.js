
import {
  getLastItemFromArray,
  removeItemFromArrayByIndex,
  getRandomIndexFromArray,
} from '../arrayFunctions';

const array = [
  0,
  1,
  2,
  3,
  4,
];

it('get random index from array', () => {
  const randomIndex = getRandomIndexFromArray(array);

  expect(randomIndex).toBeLessThan(array.length);
});

it('throws an error if an array isn\'t passed', () => {
  expect(() => {
    removeItemFromArrayByIndex(1, 2);
  }).toThrow('was expecting an object array but got [number]');

  expect(() => {
    getRandomIndexFromArray();
  }).toThrow('was expecting an object array but got [undefined]');
});

it('throws an error if an empty array is passed', () => {
  expect(() => {
    removeItemFromArrayByIndex(0, []);
  }).toThrow('your array is empty');
});

it('returns -1 if array is empty', () => {
  expect(getRandomIndexFromArray([])).toBe(-1);
});
