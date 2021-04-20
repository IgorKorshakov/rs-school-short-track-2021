/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;
  const num = n.toString().split('');
  for (let i = num.length - 1; i >= 0; i--) {
    const arr = num.slice();
    arr.splice(i, 1);
    const x = +arr.join('');
    if (x > res) {
      res = x;
    }
  }
  return res;
}

module.exports = deleteDigit;
