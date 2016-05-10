var _ = {};



  // Memorize an expensive function's results by storing them. You may assume
  // that the function takes only one argument and that it is a primitive.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
    var results = [];
    var args = [];

    var has = function(array, element) {
      var found = false;
      for (var i = 0; i < array.length && !found; i++) {
        found = array[i] === element;
      }
      return found;
    };

    return function(arg) {
      if (has(args, arg)) {
        return results[args.indexOf(arg)];
      } else {
        var result = func.apply(this, arguments);
        args.push(arguments[0]);
        results.push(result);
        return result;
      }
    };
  };

var dummy = function() {console.log('I have been called'); return "Dummy text";};

var memorized = _.memoize(dummy);
memorized(10);
memorized(10);
memorized(5);
memorized(5);
