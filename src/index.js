module.exports = function check(str, bracketsConfig) {
  let testStr = str;

  for(let testStrIndex = testStr.length; testStrIndex >= 0; testStrIndex--){
    for(let configIndex = 0, len = bracketsConfig.length; configIndex<len; configIndex++){
      if(testStr[testStrIndex] === bracketsConfig[configIndex][0]){
        testStr = testStr.replace(bracketsConfig[configIndex].join(''),'')
      }
    }
  }

  return testStr.length === 0;
}
