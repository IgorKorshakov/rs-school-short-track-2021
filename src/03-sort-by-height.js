/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const transformArr = [];

  arr.forEach((elem, index) => {
    if (elem === -1) {
      newArr.push(index);
    } else {
      transformArr.push(elem);
    }
  });

  transformArr.sort((a, b) => a - b);

  for (let i = 0; i < newArr.length; i++) {
    transformArr.splice(newArr[i], 0, -1);
  }
  return transformArr;
}

module.exports = sortByHeight;
