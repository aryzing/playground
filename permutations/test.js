
Array.prototype.createPermutations = require('./permutations.js').createPermutations;
var possibleArrayPermutations = require('./permutations.js').possibleArrayPermutations;
var possibleArrayCombinations = require('./permutations.js').possibleArrayCombinations;

describe('Permutations', function() {
  it('Should return null for empty array for all r values', function() {
    expect([].createPermutations(1)).to.be(null);
    expect([].createPermutations(4)).to.be(null);
  });
  it('Should return null for r = 0', function() {
    expect([].createPermutations(0)).to.be(null);
    expect([1].createPermutations(0)).to.be(null);
    expect(['a'].createPermutations(0)).to.be(null);
    expect(['a', 'b'].createPermutations(0)).to.be(null);
  });
  it('Should return null when r > p', function() {
    expect([1, 2].createPermutations(7).length).to.be(null);
    expect(['a', 'b'].createPermutations(3).length).to.be(null);
  });
  it('Should return array with single permutation 1P1', function() {
    expect([1].createPermutations(1).length).to.be(1);
    expect(['a'].createPermutations(1).length).to.be(1);
  });
  it('Should return array with two permutations 2P2', function() {
    expect([1, 2].createPermutations().length).to.be(2);
    expect(['a', 'b'].createPermutations().length).to.be(2);
  });
  it('Should return array with six permutations 3P3', function() {
    expect([1, 2, 'c'].createPermutations().length).to.be(2);
    expect(['a', 'b', 3].createPermutations().length).to.be(2);
  });
  it('Should return array with twelve permutations 4P2', function() {
    expect([1, 2, 'c', 'd'].createPermutations().length).to.be(12);
    expect(['a', 'b', 3, 99].createPermutations().length).to.be(12);
  });

});

describe('Combinations'); //to do
