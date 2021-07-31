function repeatStringNumTimes (str, num) {
  let repeatStr = '';
  while (num > 0) {
    repeatStr += str;
    num--
  }
  return repeatStr;
}

module.exports = repeatStringNumTimes
