/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const shortArr = s1.length > s2.length ? [...s2] : [...s1];
  const longArr = s1.length > s2.length ? [...s1] : [...s2];
  while (shortArr.length) {
    const elem = shortArr.pop();
    if (longArr.includes(elem)) {
      result++;
      longArr.splice(longArr.indexOf(elem), 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
