var stringifyJSON = function(val) {
  if (val === true) {
    return "true";
  } else if (val === false) {
    return "false";
  } else if (typeof val === "number") {
    return '' + val;
  } else if (val === null) {
    return 'null';
  } else if (typeof val === 'string') {
    return '"' + val + '"';
  } else if (Array.isArray(val)) {
    var result = '[';
    for (var i = 0; i < val.length; i++) {
      if (stringifyJSON(val[i]) !== undefined) {
        result += stringifyJSON(val[i]) + ',';
      }
    }
    if (result.slice(-1) === ',') {
      result = result.slice(0, -1);
      result += ']';
    } else {
      result += ']';
    }
    return result;
  } else if (typeof val === 'object') {
    var result = '{';
    for (var elem in val) {
      if (stringifyJSON(val[elem]) !== undefined) {
        result += '"' + elem + '"' + ':' + stringifyJSON(val[elem]) + ',';
      }
    }
    if (result.slice(-1) === ',') {
      result = result.slice(0, -1);
      result += '}';
    } else {
      result += '}';
    }
    return result;
  } else {
    return undefined;
  }
};

//mine
console.log(stringifyJSON({
  "truth": false
}));
console.log(stringifyJSON({
  "a": {
    "b": "c"
  }
}));

//official
console.log(JSON.stringify([]));
console.log(JSON.stringify({
  "foo": []
}));


// console.log(JSON.stringify(null));
// console.log(4);
// console.log(stringifyJSON(4));
// console.log(stringifyJSON(true));
// console.log(stringifyJSON(false));
// console.log(stringifyJSON(function() {
//   return 7;
// }));
// console.log(stringifyJSON('Edu'));
// console.log(stringifyJSON(null));
// console.log(JSON.stringify([1, 2, 3, 4]));
// console.log(stringifyJSON());
// console.log(stringifyJSON());


console.log(stringifyJSON());
