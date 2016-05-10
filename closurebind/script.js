// example of hard binding with closures
var bound = function(f, obj) {
  return function() {
    return f.apply(obj, arguments);
  };
};
