var makeStopwatch = function() {
  var elapsed = 0;
  var stopwatch = function() {return elapsed;};
  var increase = function() {elapsed++;};
  setInterval(increase, 5000);
  return stopwatch;
};
