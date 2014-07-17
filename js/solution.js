function(val) {
  function replaceSpecial(str) {
    return str.replace(/(.*)IV(.*)/g, "$1IIII$2")
  }

  var charValueMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  var specialsReplaced = replaceSpecial(val)
  var splitChars = specialsReplaced.split("")

  return _.reduce(splitChars, function(acc, character) {
    return acc + charValueMap[character]
  }, 0)
}