// @flow

export const getRandomIndexFromArray = (array: any[]): number => {
  const randomIndex = Math.floor(array.length * Math.random());

  return randomIndex;
};

export const removeItemFromArrayByIndex = (
  itemIndex: number,
  array: any[]
): any[] => {
  if (array.length < 1) throw new Error("your array is empty");
  if (itemIndex > array.length - 1)
    throw new Error("your index must be on array's range");

  return array.filter((item, index) => index !== itemIndex);
};
