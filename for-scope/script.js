var charCount = function(str) {
  var char;
  var results = [];
  for (var i = 0; i < str.length; i++) {
    char = str[i];
    for (var j = 0; j < results.length; j++) {
      if (results[j][0] === char) {
        results[j][1]++;
        break;
      }
    }

    if (j === results.length) {
      var tuple = [];
      tuple.push(char);
      tuple.push(1);
      results.push(tuple);
    }
  }
  return results;
};

var result = charCount('aabcccccca');
var dummy = 0;

console.log(result);
console.log(dummy);
