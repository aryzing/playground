function factorial(n) {
  if (n < 0) {
    // Termination condition to prevent infinite recursion
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // Recursive case
  return n * factorial(n -1);
}

var combination = function(n,r){
 return factorial(n) / ( factorial(r)*factorial(n - r) );
};

var permutation = function(n,r) {
	return factorial(n) / factorial(n -r);
};

function possibleArrayPermutations(r) {
  return permutation(this.length, r);
}

function possibleArrayCombinations(r) {
  return combination(this.length, r);
}

/**
    Takes array of values to permute. Array length taken as n.
**/
function createPermutations(r) {

}

// Exports
exports.possibleArrayPermutations = possibleArrayPermutations;
exports.possibleArrayCombinations = possibleArrayCombinations;
exports.createPermutations = createPermutations;
