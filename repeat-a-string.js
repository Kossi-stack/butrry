module.exports = function repeatStringNumTimes (str, num) {
  if ( num <= 0){
    return "";
  }
  let result = "";

  for (let i = 0; i < num; i += 1) {
    result += str
  }
  return result;
}

repeatStringNumTimes("abc", 3);
